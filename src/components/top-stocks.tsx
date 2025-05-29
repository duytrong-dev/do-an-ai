'use client';

import { useEffect, useState } from 'react';

type Stock = {
  symbol: string;
  name: string;
  price: string;
  percent: string;
};

export default function TopStocks() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/top-stocks'); // đảm bảo API bạn đặt đúng đường dẫn
        const data = await res.json();
        setStocks(data);
      } catch (err) {
        console.error('Lỗi khi lấy dữ liệu:', err);
      }
    };

    fetchData(); // gọi lần đầu

    const interval = setInterval(fetchData, 5000); // gọi lại mỗi 5 giây

    return () => clearInterval(interval); // dọn dẹp interval khi unmount
  }, []);

  const getPercentClass = (percent: string) => {
    if (percent.startsWith('-')) return 'negative-change';
    return 'positive-change';
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 gradient-text">Cổ phiếu nổi bật</h3>
      <div className="space-y-4">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="stock-card bg-white p-4 rounded-lg border border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold">{stock.symbol}</div>
                <div className="text-sm text-gray-500">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{stock.price.replace(stock.percent, '')}</div>
                <div className={`text-sm ${getPercentClass(stock.percent)}`}>{stock.percent}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a href="https://banggia.vietstock.vn/" className="text-indigo-600 text-sm hover:underline" target="_blank">
          Xem thêm cổ phiếu →
        </a>
      </div>
    </div>
  );
}
