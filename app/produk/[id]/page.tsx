import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const products = [
  { id: 1, name: 'Laptop Gaming', price: 15000000, category: 'Elektronik', description: 'Laptop gaming performa tinggi dengan GPU terbaru' },
  { id: 2, name: 'Mouse Wireless', price: 250000, category: 'Aksesoris', description: 'Mouse nirkabel ergonomis dengan sensor presisi' },
  { id: 3, name: 'Keyboard Mechanical', price: 850000, category: 'Aksesoris', description: 'Keyboard mekanik dengan switch Cherry MX' },
  { id: 4, name: 'Monitor 24 inch', price: 2500000, category: 'Elektronik', description: 'Monitor IPS 24 inch resolusi Full HD' },
  { id: 5, name: 'Headset Gaming', price: 650000, category: 'Aksesoris', description: 'Headset gaming dengan surround sound 7.1' },
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan',
    };
  }

  return {
    title: `${product.name} - Detail Produk`,
    description: product.description,
  };
}

export default function DetailProdukPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <Link href="/produk" className="text-black hover:underline mb-4 inline-block text-sm">
        Kembali ke Daftar Produk
      </Link>
      
      <div className="max-w-2xl border border-neutral-300 rounded-md p-6 mt-4 bg-white">
        <h1 className="text-black mb-4">{product.name}</h1>
        <div className="space-y-3">
          <div>
            <p className="text-neutral-600 text-sm">
              <span className="font-medium text-neutral-700">Kategori:</span> {product.category}
            </p>
          </div>
          <div>
            <p className="text-neutral-600 text-sm">
              <span className="font-medium text-neutral-700">Deskripsi:</span> {product.description}
            </p>
          </div>
          <div className="pt-2">
            <p className="text-2xl font-semibold text-black">
              Rp {product.price.toLocaleString('id-ID')}
            </p>
          </div>
        </div>
        <button className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-neutral-800 transition-colors text-sm font-medium">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
