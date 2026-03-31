import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const kbPath = path.join(process.cwd(), 'knowledge_base.json');
    const data = await fs.readFile(kbPath, 'utf8');
    const kb = JSON.parse(data);

    const products = kb.catalog?.ai_inventory?.products || [];

    return NextResponse.json(products);
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Error al obtener productos: ' + error.message }, { status: 500 });
  }
}
