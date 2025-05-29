export default function VolumeChart() {
    return (
        <div className="bg-white rounded-lg shadow p-6 col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 gradient-text">Khối lượng giao dịch</h3>
            <div className="chart-container h-64">
                <canvas id="volumeChart"></canvas>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                Dữ liệu từ <a href="https://www.cophieu68.vn/" className="text-indigo-600 hover:underline" target="_blank">Cophieu68.vn</a>
            </div>
        </div>
    )
}