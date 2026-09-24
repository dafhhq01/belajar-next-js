import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Belajar Next.js',
  description: 'Dashboard dengan layout khusus sidebar',
};

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-black mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-neutral-300 bg-white p-6 rounded-md">
          <h3 className="text-neutral-600 text-xs font-medium mb-2">Total Produk</h3>
          <p className="text-3xl font-semibold text-black">5</p>
        </div>
        <div className="border border-neutral-300 bg-white p-6 rounded-md">
          <h3 className="text-neutral-600 text-xs font-medium mb-2">Total Penjualan</h3>
          <p className="text-3xl font-semibold text-black">128</p>
        </div>
        <div className="border border-neutral-300 bg-white p-6 rounded-md">
          <h3 className="text-neutral-600 text-xs font-medium mb-2">Revenue</h3>
          <p className="text-3xl font-semibold text-black">Rp 45.2M</p>
        </div>
      </div>
    </div>
  );
}
