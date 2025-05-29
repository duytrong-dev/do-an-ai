export default function AIPredictionChart() {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Dự đoán AI - VN-Index</h3>
            <div className="chart-container h-64">
                <canvas id="predictionChart"></canvas>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                Dự đoán 7 ngày tới bằng mô hình LSTM
            </div>
        </div>
    )
}