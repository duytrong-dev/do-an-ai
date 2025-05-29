import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

type Stock = {
  symbol: string;
  name: string;
  price: string;
  percent: string;
  volume: string;
  marketCap: string;
  pe: string;
  sector: string;
  exchange: string;
};

export async function GET() {
  try {
    const url = 'https://banggia.vietstock.vn/';
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const stocks: Stock[] = [];

    $('tr[id^="row-"]').each((_, tr) => {
    const $tr = $(tr);
    const symbol = $tr.attr('data-symbol')?.trim() || '';
    const name = $tr.find('td.short-symbol').attr('data-tooltip')?.trim() || '';
    const price = $tr.find(`span[id^="lastP"]`).text().trim().replace(',', '.');
    const percent = $tr.find(`span[id^="lastPC"]`).text().trim();
  
    // ✅ Lấy thêm dữ liệu từ các cột khác (index có thể thay đổi theo layout Vietstock)
    const volume = $tr.find('td').eq(6).text().trim();         // ví dụ: 6 = cột khối lượng
    const marketCap = $tr.find('td').eq(10).text().trim();     // ví dụ: 10 = cột vốn hóa
    const pe = $tr.find('td').eq(11).text().trim();            // ví dụ: 11 = cột P/E
    const sector = $tr.find('td').eq(12).text().trim();        // ví dụ: 12 = cột ngành
    const exchange = $tr.find('td').eq(13).text().trim();      // ví dụ: 13 = cột sàn (HOSE)
  
    if (symbol && name && price && percent) {
      stocks.push({
        symbol,
        name,
        price,
        percent,
        volume,
        marketCap,
        pe,
        sector,
        exchange
      });
    }
    });

    return NextResponse.json(stocks);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    return NextResponse.json(
      { error: 'Không thể lấy dữ liệu cổ phiếu' },
      { status: 500 }
    );
  }
}
