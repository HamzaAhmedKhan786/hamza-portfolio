import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: "Email and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      subject: "New Portfolio Contact Message",
      replyTo: email,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}