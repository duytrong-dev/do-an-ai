'use client';

import { useEffect, useState } from 'react';

type Stock = {
  symbol: string;
  name: string;
  price: string;
  percent: string;
  volume: string;
  marketCap: string;
  pe: string;
  sector: string;
  exchange: string;
};

export default function ListStock() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
      async function fetchIndices() {
        try {
          const res = await fetch('/api/stocks');
          const data = await res.json();
          setStocks(data);
        } catch (error) {
          console.error('Error fetching indices:', error);
        }
      }
  
      fetchIndices();
      const intervalId = setInterval(fetchIndices,5000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã CP</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên công ty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thay đổi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KLGD</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vốn hóa</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P/E</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngành</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sàn</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stocks.map(stock => (
              <tr key={stock.symbol} className="table-row">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-bold text-indigo-600">{stock.symbol}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{stock.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold">{stock.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-sm ${
                      stock.percent.startsWith('-') ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {stock.percent}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{stock.volume}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{stock.marketCap}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{stock.pe}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{stock.sector}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {stock.exchange}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href={`/stock/${stock.symbol}`} className="text-indigo-600 hover:text-indigo-900 mr-3">Chi tiết</a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Theo dõi</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
