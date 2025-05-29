export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">StockAI</h3>
                        <p className="text-sm text-gray-500">Nền tảng phân tích và dự đoán chứng khoán bằng AI hàng đầu Việt Nam</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Dữ liệu</h3>
                        <ul className="space-y-2">
                            <li><a href="https://www.hsx.vn/" className="text-sm text-gray-500 hover:text-indigo-600" target="_blank">HOSE</a></li>
                            <li><a href="https://www.hnx.vn/" className="text-sm text-gray-500 hover:text-indigo-600" target="_blank">HNX</a></li>
                            <li><a href="https://www.upcom.com.vn/" className="text-sm text-gray-500 hover:text-indigo-600" target="_blank">UPCOM</a></li>
                            <li><a href="https://www.cophieu68.vn/" className="text-sm text-gray-500 hover:text-indigo-600" target="_blank">Cophieu68</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tin tức</h3>
                        <ul className="space-y-2">
                            <li><a href="https://cafef.vn/thi-truong-chung-khoan.chn" className="text-sm text-gray-500 hover:text-indigo-600" target="_blank">Cafef</a></li>
                            <li><a href="https://vneconomy.vn/chung-khoan.htm" className="text-sm text-gray-500 hover:text-indigo-600" target="_blank">VnEconomy</a></li>
                            <li><a href="https://www.vietstock.vn/" className="text-sm text-gray-500 hover:text-indigo-600" target="_blank">Vietstock</a></li>
                            <li><a href="https://ndh.vn/chung-khoan.html" className="text-sm text-gray-500 hover:text-indigo-600" target="_blank">NDH</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Liên hệ</h3>
                        <p className="text-sm text-gray-500 mb-2">Email: support@stockai.vn</p>
                        <p className="text-sm text-gray-500">Hotline: **** ****</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}