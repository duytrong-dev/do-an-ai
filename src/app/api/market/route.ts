import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const { data } = await axios.get('https://banggia.vietstock.vn/', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
      },
    });

    const $ = cheerio.load(data);

    // Lấy dữ liệu VN-Index
    const vnValue = $('#index-close-1').text().trim();
    const vnChange = $('#index-change-1').text().trim();

    // Lấy dữ liệu HNX-Index (giả sử id 2)
    const hnxValue = $('#index-close-2').text().trim();
    const hnxChange = $('#index-change-2').text().trim();

    // Lấy dữ liệu UPCOM-Index (giả sử id 3)
    const upcomValue = $('#index-close-3').text().trim();
    const upcomChange = $('#index-change-3').text().trim();

    const result = [
      {
        name: 'VN-Index',
        value: vnValue || 'N/A',
        change: vnChange || 'N/A',
      },
      {
        name: 'HNX-Index',
        value: hnxValue || 'N/A',
        change: hnxChange || 'N/A',
      },
      {
        name: 'UPCOM-Index',
        value: upcomValue || 'N/A',
        change: upcomChange || 'N/A',
      },
    ];

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching market data:', error);
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 });
  }
}
