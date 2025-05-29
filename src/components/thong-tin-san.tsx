'use client';
import { useState, useEffect } from 'react';
import LineChart from './line-chart';

interface MarketIndex {
  name: string;
  value: string;
  change: string;
}

export default function ThongTinSan () {

    const [indices, setIndices] = useState<MarketIndex[]>([]);

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
        const intervalId = setInterval(fetchIndices,10000);
    
        return () => clearInterval(intervalId);
    }, []);

      const chartConfigs = [
            {
                data: Array.from({ length: 20 }, () => Math.random() * 2 + 1233),
                color: '#10b981',
            },
            {
                data: Array.from({ length: 20 }, () => Math.random() * 1 + 244),
                color: '#10b981',
            },
            {
                data: Array.from({ length: 20 }, () => Math.random() * 0.5 + 78.5),
                color: '#ef4444',
            },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {
                indices.map(({ name, value, change }, index) => (
                    <div key={name} className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-gray-500">{name}</div>
                                <div className="text-2xl font-bold">{value || '--'}</div>
                            </div>
                            <div className="text-right">
                                <div className={`text-sm ${change?.includes('-') ? 'negative-change text-red-600' : 'positive-change text-green-600'}`}>
                                    {change || '--'}
                                </div>
                            </div>
                        </div>
                        {
                            chartConfigs[index] && (
                                <LineChart
                                    data={chartConfigs[index].data}
                                    borderColor={chartConfigs[index].color}
                                />
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

