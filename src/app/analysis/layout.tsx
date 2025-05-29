import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang phân tích",
  description: "Trang phân tích của StockAI - Nền tảng phân tích và dự đoán chứng khoán bằng AI hàng đầu Việt Nam",
};

export default function StocksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
