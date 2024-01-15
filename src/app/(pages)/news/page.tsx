import { createClient } from '@/prismicio';
import React from 'react';
import MainNew from './components/MainNew';
import PostCard from './components/PostCard';
import LastNewsHeader from './components/LastNewsHeader';
import { prismicClient } from '@/services/prismic';

const News = async () => {
  const newsPage: any = await prismicClient.getByUID("news", "news_page_1");
  const post: any = await prismicClient.getAllByType("post", {
    pageSize: 10,
    orderings: ["my.post.first_publication_date desc"]
  });

  return (
    <div className="flex flex-col w-full gap-6">
      <MainNew newsPage={newsPage} />

      <LastNewsHeader />

      <section className='flex flex-col lg:flex-row lg:flex-wrap gap-5 items-center justify-between '>
        {post && post.map((post: any) => (
          <PostCard post={post} key={post.uid}/>
        ))}
      </section>
    </div>
  );
}

export default News;
