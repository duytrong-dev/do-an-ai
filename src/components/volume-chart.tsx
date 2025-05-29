'use client';

import { useEffect, useRef } from 'react';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Đăng ký các thành phần cần thiết cho Bar chart
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function VolumeChart() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);
  
    useEffect(() => {
      const ctx = chartRef.current?.getContext('2d');
      if (!ctx) return;
  
      const labels = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        return date.toLocaleDateString('vi-VN');
      });
  
      const dataValues = Array.from({ length: 30 }, () => Math.random() * 1000000 + 500000);
  
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
  
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Khối lượng',
              data: dataValues,
              backgroundColor: 'rgba(139, 92, 246, 0.7)',
              borderColor: 'rgba(139, 92, 246, 1)',
              borderWidth: 1,
              borderRadius: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return (context.raw as number).toLocaleString('vi-VN') + ' cổ phiếu';
                },
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              grid: { color: 'rgba(0, 0, 0, 0.05)' },
            },
          },
        },
      });
  
      return () => {
        chartInstance.current?.destroy();
        chartInstance.current = null;
      };
    }, []);
    return (
        <div className="bg-white rounded-lg shadow p-6 col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 gradient-text">Khối lượng giao dịch</h3>
            <div className="relative w-full h-64">
                <canvas ref={chartRef} ></canvas>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                Dữ liệu từ <a href="https://www.cophieu68.vn/" className="text-indigo-600 hover:underline" target="_blank">Cophieu68.vn</a>
            </div>
        </div>
    )
}