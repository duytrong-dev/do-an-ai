import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

type Stock = {
  symbol: string;
  name: string;
  price: string;
  percent: string;
};

export async function GET() {
  try {
    const url = 'https://banggia.vietstock.vn/';
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const topStocks: Stock[] = [];

    $('tr[id^="row-"]').slice(0, 5).each((_, tr) => {
      const $tr = $(tr);
      const symbol = $tr.attr('data-symbol')?.trim() || '';
      const name = $tr.find('td.short-symbol').attr('data-tooltip')?.trim() || '';
      const price = $tr.find('span[id^="lastP"]').text().trim();
      const percent = $tr.find('span[id^="lastPC"]').text().trim();

      if (symbol && name && price && percent) {
        topStocks.push({ symbol, name, price, percent });
      }
    });

    // ⚠️ Phải return
    return NextResponse.json(topStocks);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    return NextResponse.json(
      { error: 'Không thể lấy dữ liệu cổ phiếu' },
      { status: 500 }
    );
  }
}
