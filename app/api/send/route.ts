import { NextResponse } from 'next/server'
import { Resend } from 'resend';
import { EmailTemplate, SenderTemplate } from '@/app/email-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);


export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  const { data, error } = await resend.emails.send({
    from: `${name} <${name}@rafdev.net>`,
    to: ['rashadmckinney@outlook.com'],
    subject: `You have a new message from rafdev! @${email}`,
    text: message,
  });

  if (error) {
    return NextResponse.json(error, {status: 400})
  }

  return NextResponse.json(error, {status: 200})
};