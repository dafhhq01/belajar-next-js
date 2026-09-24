import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-neutral-300 bg-white p-6">
        <h2 className="text-black mb-6">Dashboard</h2>
        <nav className="space-y-1">
          <Link href="/dashboard" className="block py-2 px-3 rounded-md text-sm text-neutral-700 hover:bg-neutral-50">
            Overview
          </Link>
          <Link href="/dashboard/statistik" className="block py-2 px-3 rounded-md text-sm text-neutral-700 hover:bg-neutral-50">
            Statistik
          </Link>
          <Link href="/dashboard/pengaturan" className="block py-2 px-3 rounded-md text-sm text-neutral-700 hover:bg-neutral-50">
            Pengaturan
          </Link>
          <Link href="/" className="block py-2 px-3 rounded-md text-sm text-neutral-700 hover:bg-neutral-50 mt-6 border-t border-neutral-300 pt-4">
            Ke Beranda
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-white">
        {children}
      </main>
    </div>
  );
}
