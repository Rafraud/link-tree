import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  const { data, error } = await resend.emails.send({
    from: `${name} <mail@rafdev.net>`,
    to: ["rashadmckinney@outlook.com"],
    subject: `You have a new message from rafdev!`,
    text: ` From: ${name} (${email})\n\n${message}`,
  });

  if (error) {
    return NextResponse.json(error, { status: 400 });
  }

  return NextResponse.json(error, { status: 200 });
}
