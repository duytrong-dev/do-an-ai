import ListStock from "@/components/list-stock"
import StockSearch from "@/components/stock-search"
import ThongTinSan from "@/components/thong-tin-san"

export default function StocksPage() { 
    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-15">
               
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 gradient-text">Danh sách cổ phiếu</h1>
                    <p className="text-gray-600">Dữ liệu cập nhật theo thời gian thực từ HOSE, HNX và UPCOM</p>
                </div>
        
                <StockSearch />
        
                <ThongTinSan />
        
                <ListStock />

            </div>
        </div>
    )
}        