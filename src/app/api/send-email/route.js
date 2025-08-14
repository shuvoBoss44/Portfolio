// src/app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // 1. Create a transporter using your email service and credentials
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE, // Use 'true' if port is 465, 'false' for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // 2. Define the email content
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO, // The recipient of the email (e.g., your email address)
            subject: `Message from Portfolio Contact Form`,
            html: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>New Portfolio Message</title>
                  <style>
                      body {
                          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                          background-color: #f4f4f4;
                          margin: 0;
                          padding: 0;
                      }
                      .container {
                          width: 100%;
                          max-width: 600px;
                          margin: 0 auto;
                          background-color: #ffffff;
                          padding: 20px;
                          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                      }
                      .header {
                          text-align: center;
                          padding-bottom: 20px;
                          border-bottom: 1px solid #eeeeee;
                      }
                      .header h1 {
                          color: #333333;
                      }
                      .content {
                          padding: 20px 0;
                          color: #555555;
                          line-height: 1.6;
                      }
                      .content p {
                          margin: 0 0 10px;
                      }
                      .footer {
                          text-align: center;
                          padding-top: 20px;
                          border-top: 1px solid #eeeeee;
                          font-size: 12px;
                          color: #aaaaaa;
                      }
                  </style>
              </head>
              <body>
                  <div class="container">
                      <div class="header">
                          <h1>New Message from Your Portfolio</h1>
                      </div>
                      <div class="content">
                          <p>You have received a new message from your portfolio contact form.</p>
                          <p><strong>Name:</strong> ${name}</p>
                          <p><strong>Email:</strong> ${email}</p>
                          <p><strong>Message:</strong></p>
                          <p>${message}</p>
                      </div>
                      <div class="footer">
                          <p>This email was sent from your personal website.</p>
                      </div>
                  </div>
              </body>
              </html>
            `,
        };

        // 3. Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
    }
}