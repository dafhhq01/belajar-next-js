import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pencarian Produk - Belajar Next.js',
  description: 'Form pencarian produk real-time dengan filter kategori',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
