import Search from "../components/search";
import LargePriceChart from "../components/large-price-chart";
import TopStocks from "../components/top-stocks";
import VolumeChart from "../components/volume-chart";
import MarketNews from "../components/market-news";
import ActionCards from "../components/action-cards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-15">
            
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 gradient-text">Nền tảng phân tích chứng khoán AI</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dự đoán giá cổ phiếu chính xác với công nghệ AI và phân tích dữ liệu thời gian thực từ các sàn giao dịch</p>
            </div>
    
            <Search />
    
            {/* <!-- Main Charts Section --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"> 
                <LargePriceChart />
                <TopStocks />
            </div>
    
            {/* <!-- Volume and Prediction Charts --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"> 
                <VolumeChart />
                <MarketNews />
            </div>
    
            <ActionCards />

        </div>
    </div>
  );    
}    
    