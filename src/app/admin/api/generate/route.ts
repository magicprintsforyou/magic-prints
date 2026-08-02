import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

// Inicializamos el proveedor de Google (Gemini) usando la variable de entorno de Google AI Studio
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { baseName } = await req.json();

    if (!baseName) {
      return new Response(JSON.stringify({ error: 'Base name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `
You are the VIP Production Copywriter and Catalog Architect for Magic Prints, a premium B2B event printing company.
Your task is to take a raw product name entered by the user, and generate a fully completed, high-quality, professional product entry for our catalog.

You must classify the product into one of our 5 exact categories:
1. 'photoBoards' - Premium Photo Boards, rigid substrates, acrylic signages, welcome signs, PVC Sintra boards, backdrops.
2. 'props' - Foam Board Props & Cut-outs, life-size figures, character standees, giant prop letters.
3. 'floorWraps' - Luxury Floor Wraps, dance floor vinyl covers, non-slip floor mats.
4. 'themedKits' - Signature Event Packages/Suites (combinations of multiple items like backdrops + props).
5. 'essentials' - Event Essentials, retractable banners, rollups, step and repeats, table covers, seating charts, stationery.

You must output a single, valid JSON object with the following fields:
{
  "name": "An enhanced, elegant product name in Spanish (e.g. 'Letrero de Bienvenida de Lujo en Acrílico')",
  "category": "One of these exact strings: 'photoBoards', 'props', 'floorWraps', 'themedKits', 'essentials'",
  "description": "A museum-grade sales description in Markdown format. Emphasize fast turnaround, premium materials, and elite B2B quality. Written in Spanish.",
  "themes": ["array of 3-4 lowercase themes/tags in Spanish suitable for filtering, e.g., 'boda', 'corporativo', 'cumpleaños'"],
  "materials": ["array of 2-3 material options in Spanish, e.g., 'Acrílico Cristal 3mm', 'Vinilo UV Mate'"],
  "rushPrice": 45.0,
  "variants": [
    { "size": "Recommended Size 1 (e.g. 24 x 36 in)", "price": 120.00 },
    { "size": "Recommended Size 2 (e.g. 30 x 40 in)", "price": 160.00 },
    { "size": "Recommended Size 3 (e.g. 36 x 48 in)", "price": 210.00 }
  ]
}

CRITICAL RULES:
- The JSON object must be fully valid.
- All textual values (name, description, themes, materials, variants/sizes) MUST BE IN SPANISH.
- Do NOT include any markdown code block formatting (like \`\`\`json ... \`\`\`), backticks, or any text before or after the JSON object. Output ONLY the raw JSON string starting with { and ending with }.
`;

    const result = await generateText({
      model: google('models/gemini-2.5-flash'),
      system: systemPrompt,
      prompt: `Generate a catalog product structure for: "${baseName}"`,
    });

    const rawText = result.text.trim();
    // Clean up any markdown blocks if the model ignored instructions
    const jsonString = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();

    const parsedData = JSON.parse(jsonString);

    return new Response(JSON.stringify(parsedData), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } catch (error: any) {
    console.error('Error generating AI text:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate content', details: error?.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
