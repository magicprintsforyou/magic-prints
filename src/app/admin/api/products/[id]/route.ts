import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const kbPath = path.join(process.cwd(), 'knowledge_base.json');
    const data = await fs.readFile(kbPath, 'utf8');
    const kb = JSON.parse(data);

    if (!kb.catalog?.ai_inventory?.products) {
      return NextResponse.json({ error: 'No hay productos para eliminar.' }, { status: 404 });
    }

    const initialLength = kb.catalog.ai_inventory.products.length;
    kb.catalog.ai_inventory.products = kb.catalog.ai_inventory.products.filter(
      (p: any) => p.id !== id
    );

    if (kb.catalog.ai_inventory.products.length === initialLength) {
      return NextResponse.json({ error: 'Producto no encontrado.' }, { status: 404 });
    }

    await fs.writeFile(kbPath, JSON.stringify(kb, null, 2), 'utf8');

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Error al eliminar el producto: ' + error.message }, { status: 500 });
  }
}
