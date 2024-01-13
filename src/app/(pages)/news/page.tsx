import CircleHome from '@/components/CircleHome';
import CustomImage from '@/components/CustomImage';
import { createClient } from '@/prismicio';
import Link from 'next/link';
import React from 'react';
import MainNew from './components/MainNew';

const News = async () => {
  const prismic = createClient();

  const newsPage: any = await prismic.getByUID("news", "news_page_1");

  console.log(newsPage);

  return (
    <div className="flex flex-col w-full gap-6">
      <MainNew  newsPage={newsPage} />
    </div>
  );
}

export default News;
