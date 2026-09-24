import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Laptop Gaming', price: 15000000, category: 'Elektronik' },
  { id: 2, name: 'Mouse Wireless', price: 250000, category: 'Aksesoris' },
  { id: 3, name: 'Keyboard Mechanical', price: 850000, category: 'Aksesoris' },
  { id: 4, name: 'Monitor 24 inch', price: 2500000, category: 'Elektronik' },
  { id: 5, name: 'Headset Gaming', price: 650000, category: 'Aksesoris' },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: products,
  });
}
