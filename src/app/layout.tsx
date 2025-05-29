import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stock Analysis Platform",
  description: "Phân tích chứng khoán và dự đoán chứng khoán sử dụng LSTM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/luxon@2.0.2"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-luxon@1.0.0"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@1.2.1"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@1.0.2"></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1237.0"
        data-gr-ext-installed=""
      >
        <>
        <Header />
        {children}
        <Footer />
        </>
      </body>
    </html>
  );
}
