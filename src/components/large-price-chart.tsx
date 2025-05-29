'use client';

import { useEffect, useRef } from 'react';

import {
  Chart,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(LineElement, LineController, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function LargePriceChart() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);
  
    useEffect(() => {
      // Import plugin zoom chỉ khi đang chạy client
      import('chartjs-plugin-zoom').then(({ default: zoomPlugin }) => {
        Chart.register(zoomPlugin);
  
        const ctx = chartRef.current?.getContext('2d');
        if (!ctx) return;
  
        const labels = Array.from({ length: 30 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (29 - i));
          return date.toLocaleDateString('vi-VN');
        });
  
        const dataValues = Array.from({ length: 30 }, () => Math.random() * 100 + 1200);
  
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'VN-Index',
                data: dataValues,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                mode: 'index',
                intersect: false,
              },
              zoom: {
                zoom: {
                  wheel: { enabled: true },
                  pinch: { enabled: true },
                  mode: 'x',
                },
                pan: {
                  enabled: true,
                  mode: 'x',
                },
              },
            },
            scales: {
              x: { grid: { display: false } },
              y: { grid: { color: 'rgba(0, 0, 0, 0.05)' } },
            },
            interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false,
            },
          },
        });
      });
  
      return () => {
        chartInstance.current?.destroy();
        chartInstance.current = null;
      };
    }, []);
    
    
    return (
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 gradient-text">Biểu đồ giá VN-Index</h3>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">1D</button>
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">1W</button>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">1M</button>
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">1Y</button>
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">ALL</button>
                </div>
            </div>
            <div className="relative h-96 w-full">
                <canvas ref={chartRef}></canvas>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                Dữ liệu được cập nhật từ <a href="https://www.hsx.vn/" className="text-indigo-600 hover:underline" target="_blank">HOSE</a> và <a href="https://www.hnx.vn/" className="text-indigo-600 hover:underline" target="_blank">HNX</a>
            </div>
        </div>
    )
}