import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.TO_EMAIL!,
      subject: `New message from Blossom tex`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}