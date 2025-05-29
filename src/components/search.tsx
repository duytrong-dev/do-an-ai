'use client';
import { useState, useEffect } from 'react';

interface MarketIndex {
  name: string;
  value: string;
  change: string;
}

export default function Search() {
    // State để lưu trữ dữ liệu chỉ số thị trường
  const [indices, setIndices] = useState<MarketIndex[]>([]);
  const [query, setQuery] = useState('');

  // Lấy dữ liệu chỉ số thị trường mỗi 10s
  useEffect(() => {
    async function fetchIndices() {
      try {
        const res = await fetch('/api/market');
        const data = await res.json();
        setIndices(data);
      } catch (error) {
        console.error('Error fetching indices:', error);
      }
    }

    fetchIndices();
    const intervalId = setInterval(fetchIndices,5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mb-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96 mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center hover:cursor-pointer z-20">
              <i className="fas fa-search text-gray-400 gradient-text"></i>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tìm kiếm mã cổ phiếu..."
              autoComplete="off"
            />
            {/* Bỏ phần hiển thị kết quả tìm kiếm */}
          </div>

          <div className="flex space-x-4">
            {indices.map(({ name, value, change }) => (
              <div key={name} className="text-center">
                <div className="text-sm text-gray-500">{name}</div>
                <div className="text-xl font-bold">{value || '--'}</div>
                <div
                  className={`text-sm ${
                    change?.includes('-')
                      ? 'negative-change text-red-600'
                      : 'positive-change text-green-600'
                  }`}
                >
                  {change || '--'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
