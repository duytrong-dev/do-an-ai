'use client';
import { useEffect, useState } from 'react';

type NewsItem = {
  source: string;
  time: string;
  title: string;
  link: string;
};

export default function MarketNews() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('/api/news/cafef')
      .then(res => res.json())
      .then(data => setNewsList(data))
      .catch(err => console.error('Error loading news:', err));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 gradient-text">Tin tức thị trường</h3>
      <div className="space-y-4">
        {newsList.map((news, index) => (
          <a key={index} href={news.link} className="block p-3 hover:bg-gray-50" target="_blank">
            <div className="text-sm text-gray-500 mb-1">{news.source} • {news.time}</div>
            <div className="font-medium">{news.title}</div>
          </a>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a href="https://cafef.vn/thi-truong-chung-khoan.chn" className="text-indigo-600 text-sm hover:underline" target="_blank">
          Xem thêm tin tức →
        </a>
      </div>
    </div>
  );
}
