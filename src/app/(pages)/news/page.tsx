import { createClient } from '@/prismicio';
import React from 'react';
import MainNew from './components/MainNew';
import PostCard from './components/PostCard';
import LastNewsHeader from './components/LastNewsHeader';

const News = async () => {
  try {
    const prismic = createClient();
    const newsPage: any = await prismic.getByUID("news", "news_page_1");
    const post: any = await prismic.getAllByType("post", {
      pageSize: 10,
      orderings: ["my.post.first_publication_date desc"]
    });

    return (
      <div className="flex flex-col w-full gap-6">
        <MainNew newsPage={newsPage} />

        <LastNewsHeader />

        <section className='flex flex-col lg:flex-row lg:flex-wrap gap-5 items-center justify-between '>
          {post && post.map((post: any) => (
            <PostCard post={post} key={post.uid} />
          ))}
        </section>
      </div>
    );
  } catch (error) {
    return <div className='text-center text-red-500'>Nenhuma notícia cadastrada</div>;
  }
}


export default News;
