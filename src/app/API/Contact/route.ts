// app/api/contact/route.ts

import { NextResponse } from 'next/server'
const nodemailer = require('nodemailer') 

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail', // OR 'smtp.ethereal.email' / 'outlook'
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message:
${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Mail error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
