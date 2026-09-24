import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daftar Produk - Belajar Next.js',
  description: 'Halaman daftar produk untuk belajar Next.js routing',
};

const products = [
  { id: 1, name: 'Laptop Gaming', price: 15000000, category: 'Elektronik' },
  { id: 2, name: 'Mouse Wireless', price: 250000, category: 'Aksesoris' },
  { id: 3, name: 'Keyboard Mechanical', price: 850000, category: 'Aksesoris' },
  { id: 4, name: 'Monitor 24 inch', price: 2500000, category: 'Elektronik' },
  { id: 5, name: 'Headset Gaming', price: 650000, category: 'Aksesoris' },
];

export default function ProdukPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-black mb-6">Daftar Produk</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/produk/${product.id}`}
              className="border border-neutral-300 rounded-md p-6 hover:bg-neutral-50 transition-colors"
            >
              <h3 className="text-black mb-2">{product.name}</h3>
              <p className="text-neutral-600 text-sm mb-4">{product.category}</p>
              <p className="text-black font-medium">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
