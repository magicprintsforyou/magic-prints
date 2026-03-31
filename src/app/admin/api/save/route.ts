import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { baseName, price, turnaround, generatedText } = await req.json();

    if (!baseName || !price || !generatedText) {
      return NextResponse.json({ error: 'Faltan datos requeridos.' }, { status: 400 });
    }

    const kbPath = path.join(process.cwd(), 'knowledge_base.json');
    const data = await fs.readFile(kbPath, 'utf8');
    const kb = JSON.parse(data);

    // Asegurar que exista la sección ai_inventory
    if (!kb.catalog.ai_inventory) {
      kb.catalog.ai_inventory = {
        category: "AI Generated Inventory",
        description: "Products generated and persuasive descriptions created by Magic AI.",
        products: []
      };
    }

    // Agregar el nuevo producto
    const newProduct = {
      id: Date.now().toString(),
      name: baseName,
      price: parseFloat(price),
      turnaround,
      description: generatedText,
      dateAdded: new Date().toISOString()
    };

    kb.catalog.ai_inventory.products.push(newProduct);

    // Guardar los cambios
    await fs.writeFile(kbPath, JSON.stringify(kb, null, 2), 'utf8');

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error: any) {
    console.error('Error saving to knowledge base:', error);
    return NextResponse.json({ error: 'Error al guardar en la base de datos: ' + error.message }, { status: 500 });
  }
}
