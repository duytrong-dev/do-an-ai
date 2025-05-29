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

interface LineChartProps {
  data: number[];
  borderColor?: string;
}

export default function LineChart({ data, borderColor = '#10b981'}: LineChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: data.length }, () => ''),
        datasets: [{
          data,
          borderColor,
          borderWidth: 2,
          tension: 0.1,
          fill: false,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        },
        interaction: { intersect: false }
      }
    });
  }, [data, borderColor]);

  return (
    <div className="chart-container h-20 mt-2">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
