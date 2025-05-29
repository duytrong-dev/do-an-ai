export default function LargePriceChart() {
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
            <div className="chart-container h-96">
                <canvas id="mainPriceChart"></canvas>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                Dữ liệu được cập nhật từ <a href="https://www.hsx.vn/" className="text-indigo-600 hover:underline" target="_blank">HOSE</a> và <a href="https://www.hnx.vn/" className="text-indigo-600 hover:underline" target="_blank">HNX</a>
            </div>
        </div>
    )
}