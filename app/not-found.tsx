import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md text-center border border-neutral-300 rounded-md p-8 bg-white">
        <h1 className="text-6xl font-semibold text-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-black mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-neutral-600 text-sm mb-6">
          Maaf, halaman yang Anda cari tidak ada belum bikin, malasss.
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-neutral-800 transition-colors text-sm font-medium"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
