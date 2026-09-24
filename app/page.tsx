import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beranda - Belajar Next.js',
  description: 'Proyek tutorial lengkap Next.js untuk pemula dengan App Router, routing, API, dan styling',
};

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-black mb-4">Belajar Next.js</h1>
        <p className="text-neutral-600 text-sm mb-8">
          Tutorial dari PDF Bu Shopee
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/produk"
            className="border border-neutral-300 rounded-md p-6 hover:bg-neutral-50 transition-colors"
          >
            <h2 className="text-black mb-2">Produk</h2>
            <p className="text-neutral-600 text-sm">
              Daftar produk dengan dynamic routing dan detail halaman
            </p>
          </Link>

          <Link
            href="/dashboard"
            className="border border-neutral-300 rounded-md p-6 hover:bg-neutral-50 transition-colors"
          >
            <h2 className="text-black mb-2">Dashboard</h2>
            <p className="text-neutral-600 text-sm">
              Dashboard dengan layout khusus dan sidebar navigasi
            </p>
          </Link>

          <Link
            href="/pencarian"
            className="border border-neutral-300 rounded-md p-6 hover:bg-neutral-50 transition-colors"
          >
            <h2 className="text-black mb-2">Pencarian Produk</h2>
            <p className="text-neutral-600 text-sm">
              Form pencarian real-time dengan Client Component
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
