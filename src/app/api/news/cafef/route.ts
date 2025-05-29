import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const response = await axios.get('https://cafef.vn/thi-truong-chung-khoan.chn');
    const html = response.data;
    const $ = cheerio.load(html);
    interface NewsItem {
      source: string;
      time: string;
      title: string;
      link: string;
    }
    const news: NewsItem[] = [];

    $('.tlitem').each((i, el) => {
      if (i >= 5) return;
      const title = $(el).find('h3 a').text().trim();
      const link = 'https://cafef.vn' + $(el).find('h3 a').attr('href');
      const time = $(el).find('.timeandcat .time').text().trim();
      news.push({
        source: 'CafeF',
        time,
        title,
        link,
      });
    });

    return NextResponse.json(news);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error scraping CafeF:', error.message);
    } else {
      console.error('Error scraping CafeF:', error);
    }
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}
