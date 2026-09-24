'use client';

import { useState } from 'react';

const allProducts = [
  { id: 1, name: 'Laptop Gaming', price: 15000000, category: 'Elektronik' },
  { id: 2, name: 'Mouse Wireless', price: 250000, category: 'Aksesoris' },
  { id: 3, name: 'Keyboard Mechanical', price: 850000, category: 'Aksesoris' },
  { id: 4, name: 'Monitor 24 inch', price: 2500000, category: 'Elektronik' },
  { id: 5, name: 'Headset Gaming', price: 650000, category: 'Aksesoris' },
];

export default function PencarianPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', ...Array.from(new Set(allProducts.map(p => p.category)))];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-black mb-6">Pencarian Produk</h1>
      
      <div className="border border-neutral-300 bg-white p-6 rounded-md mb-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="search" className="block text-xs font-medium text-neutral-700 mb-2">
              Cari Produk
            </label>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketik nama produk..."
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-black text-sm"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-xs font-medium text-neutral-700 mb-2">
              Filter Kategori
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-black text-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-neutral-600 text-sm">
          Ditemukan <span className="font-medium text-black">{filteredProducts.length}</span> produk
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border border-neutral-300 rounded-md p-6 bg-white">
              <h3 className="text-black mb-2">{product.name}</h3>
              <p className="text-neutral-600 text-sm mb-4">{product.category}</p>
              <p className="text-black font-medium">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-neutral-600 text-sm">
            Tidak ada produk yang ditemukan
          </div>
        )}
      </div>
    </div>
  );
}
