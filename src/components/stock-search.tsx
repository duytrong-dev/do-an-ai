export default function StockSearch () {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center hover:cursor-pointer z-20">
                        <i className="fas fa-search text-gray-400 gradient-text"></i>
                    </div>
                    <input type="text" id="stock-search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Tìm kiếm mã cổ phiếu, tên công ty..."/>
                </div>
                
                <div className="flex items-center space-x-2">
                    <div className="text-sm text-gray-500 mr-2">Sàn:</div>
                    <select className="block w-full md:w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>Tất cả</option>
                        <option>HOSE</option>
                        <option>HNX</option>
                        <option>UPCOM</option>
                    </select>
                </div>
                
                <div className="flex items-center space-x-2">
                    <div className="text-sm text-gray-500 mr-2">Ngành:</div>
                    <select className="block w-full md:w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>Tất cả</option>
                        <option>Ngân hàng</option>
                        <option>Bất động sản</option>
                        <option>Công nghệ</option>
                        <option>Tiêu dùng</option>
                        <option>Dầu khí</option>
                    </select>
                </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Tất cả</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Ngân hàng</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs active">Bất động sản</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Công nghệ</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Tiêu dùng</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Dầu khí</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Xây dựng</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Thủy sản</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Y tế</button>
                <button className="sector-filter px-3 py-1 bg-gray-100 rounded-full text-xs">Vận tải</button>
            </div>
        </div>
    )
}