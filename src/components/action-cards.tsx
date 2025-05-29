import Link from "next/link";

export default function ActionCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow p-6 text-white">
                <div className="text-2xl mb-2"><i className="fas fa-chart-line"></i></div>
                <h3 className="text-xl font-semibold mb-2">Phân tích kỹ thuật</h3>
                <p className="text-sm opacity-90 mb-4">Phân tích biểu đồ với các chỉ báo kỹ thuật chuyên sâu</p>
                <Link href="#" className="text-sm font-medium hover:underline">Xem ngay →</Link>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-lg shadow p-6 text-white">
                <div className="text-2xl mb-2"><i className="fas fa-robot"></i></div>
                <h3 className="text-xl font-semibold mb-2">Dự đoán AI</h3>
                <p className="text-sm opacity-90 mb-4">Dự đoán giá cổ phiếu bằng mô hình LSTM tiên tiến</p>
                <Link href="http://localhost:8501" className="text-sm font-medium hover:underline">Thử ngay →</Link>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg shadow p-6 text-white">
                <div className="text-2xl mb-2"><i className="fas fa-newspaper"></i></div>
                <h3 className="text-xl font-semibold mb-2">Tin tức & Sentiment</h3>
                <p className="text-sm opacity-90 mb-4">Phân tích tình cảm thị trường từ các nguồn tin tức</p>
                <Link href="#" className="text-sm font-medium hover:underline">Khám phá →</Link>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg shadow p-6 text-white">
                <div className="text-2xl mb-2"><i className="fas fa-chart-pie"></i></div>
                <h3 className="text-xl font-semibold mb-2">Báo cáo tài chính</h3>
                <p className="text-sm opacity-90 mb-4">Phân tích báo cáo tài chính doanh nghiệp</p>
                <Link href="#" className="text-sm font-medium hover:underline">Xem báo cáo →</Link>
            </div>
        </div>
    )
}