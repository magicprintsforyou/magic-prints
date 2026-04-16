import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    // Diagnostic Check: Is the API Key missing or a dummy?
    if (!apiKey || apiKey === 're_dummy_key') {
      console.error('CRITICAL: RESEND_API_KEY is missing in environment variables.');
      return NextResponse.json({ 
        error: 'Servicio de email no configurado. Por favor añade RESEND_API_KEY en el panel de Vercel.',
        diagnostic: 'MISSING_API_KEY'
      }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, phone, company, eventDate, location, needs, notes, fileUrls } = body;

    if (!email || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Send Email to Admin (Magic Prints Team)
    const adminEmail = await resend.emails.send({
      from: 'Magic Prints <onboarding@resend.dev>', // Change to verified domain later
      to: process.env.ADMIN_EMAIL || 'magicprintsforyou@gmail.com',
      subject: `✨ New Quote Request: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d90082;">New Magic Inquiry!</h2>
          <p><strong>Client:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <hr />
          <p><strong>Event Date:</strong> ${eventDate}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Needs:</strong> ${Array.isArray(needs) ? needs.join(', ') : needs}</p>
          <p><strong>Notes:</strong> ${notes || 'No extra notes'}</p>
          
          ${fileUrls && fileUrls.length > 0 ? `
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
              <p><strong>Attachments / Inspiration:</strong></p>
              <ul>
                ${fileUrls.map((url: string, index: number) => `
                  <li><a href="${url}" target="_blank" style="color: #d90082;">File ${index + 1}</a></li>
                `).join('')}
              </ul>
            </div>
          ` : '<p><i>No files attached.</i></p>'}
        </div>
      `,
    });

    // 2. Send Confirmation Email to Client
    const clientEmail = await resend.emails.send({
      from: 'Magic Prints <onboarding@resend.dev>', // Change to verified domain later
      to: email,
      subject: 'Magic is on its way! ✨',
      html: `
        <div style="font-family: sans-serif; padding: 40px; text-align: center; background-color: #0f172a; color: white; border-radius: 20px;">
          <h1 style="color: #ff2a70; font-size: 32px;">Hello ${name}!</h1>
          <p style="font-size: 18px; color: #cbd5e1;">Your vision is being materialized.</p>
          <div style="margin: 40px 0; border-top: 1px solid #334155; padding-top: 40px;">
            <p style="color: #94a3b8;">We've received your request for <strong>${Array.isArray(needs) ? needs.join(', ') : needs}</strong>.</p>
            <p style="color: #94a3b8;">Our VIP team is already working on your bespoke quote. Expect a response within 24 business hours.</p>
          </div>
          <p style="font-style: italic; color: #ffcc00;">Transforming ordinary spaces into museum-grade experiences.</p>
          <p style="margin-top: 40px; font-size: 12px; color: #64748b;">Magic Prints Team</p>
        </div>
      `,
    });

    // 3. Add to Audience (Marketing Automation)
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        firstName: name.split(' ')[0],
        lastName: name.split(' ').slice(1).join(' '),
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      });
    }

    if (adminEmail.error) {
      console.error('Resend Admin Email Error:', adminEmail.error);
      throw new Error(`Admin Email Error: ${adminEmail.error.message}`);
    }

    if (clientEmail.error) {
      console.error('Resend Client Email Error:', clientEmail.error);
      // We don't throw here to avoid failing the whole request if only the client email fails
    }

    return NextResponse.json({ success: true, adminEmailId: adminEmail.data?.id, clientEmailId: clientEmail.data?.id });
  } catch (error: any) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
