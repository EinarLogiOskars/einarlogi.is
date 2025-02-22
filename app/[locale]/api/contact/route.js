import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimit = new Map();
const REQUEST_LIMIT = 2;
const TIME_WINDOW = 60 * 1000;

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

        const now = Date.now();
        const userRequests = rateLimit.get(ip) || [];
        const recentRequests = userRequests.filter(timestamp => now - timestamp < TIME_WINDOW);

        if (recentRequests >= REQUEST_LIMIT) {
            return NextResponse.json({ error: 'Too many requests. Please wait a moment before trying again.' }, { status: 429 });
        }

        recentRequests.push(now);
        rateLimit.set(ip, recentRequests);

        const response = await resend.emails.send({
            from: 'Contact Form <noreply@mail.einarlogi.is>',
            to: ['einar@einarlogi.is'],
            subject: `New Contact Form Submission from ${name}`,
            reply_to: email,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        if (response.error) {
            return NextResponse.json({ error: response.error }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}