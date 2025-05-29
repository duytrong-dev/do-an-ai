import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang cổ phiếu",
  description: "Trang cổ phiếu của StockAI - Nền tảng phân tích và dự đoán chứng khoán bằng AI hàng đầu Việt Nam",
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
