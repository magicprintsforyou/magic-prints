import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

// Inicializamos el proveedor de Google (Gemini) usando la variable de entorno de Google AI Studio
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { baseName, price, turnaround, language = 'en' } = await req.json();

    // Prompt del Agente (El "Cerebro Comercial") adaptado para generación de descripciones B2B
    const systemPrompt = `
      You are the "VIP Copywriter" for Magic Prints, a premium large-scale event printing company (B2B).
      Your task is to take a basic product name and price, and transform it into a "Museum-Grade" SALES DESCRIPTION.
      
      TONE AND PERSONALITY:
      - Premium, Elite, Bespoke, Subtle urgency.
      - Address Event Planners and Corporate Organizers.
      - Never use cheap words like "economical" or "cheap". Use "Investment", "Unmatched Value".
      - Highlight that we are the "secret print shop behind the scenes" and have super fast times (Express/Rush).
      
      OUTPUT FORMAT (Use MarkDown):
      1. Impactful Title (e.g. 🌟 [Enhanced Name] - Visual Impact Guaranteed)
      2. Short persuasive opening paragraph (The Planner's pain + Our Magic Solution).
      3. Bulleted list with "Museum-grade features" (e.g. Anti-glare finish, ultra-resistant seamless vinyl, etc).
      4. Call to Action (CTA) focused on Event Planners indicating the turnaround time (${turnaround === '24h' ? '24h Rush' : '1-3 days Standard'}).
      
      ${language === 'es' ? 'CRITICAL INSTRUCTION: THE ENTIRE OUTPUT MUST BE TRANSLATED TO SPANISH.' : 'The output must be in English.'}
    `;

    const result = await generateText({
      model: google('models/gemini-2.5-flash'), // Gemini 2.5 Flash para generación rápida y económica
      system: systemPrompt,
      prompt: `Generate the premium B2B description for this new catalog product:
        - Base Name provided by the CEO: "${baseName}"
        - Base Investment (Price): $${price}
        - Production Time: ${turnaround === '24h' ? '24 Hours Elite Rush' : '1-3 Days (Standard)'}`,
    });

    return new Response(JSON.stringify({ text: result.text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating AI text:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
