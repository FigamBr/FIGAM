import React from 'react'
import Link from 'next/link'
import CircleHome from '@/components/CircleHome'
import CustomImage from '@/components/CustomImage'

interface Props {
    newsPage: any
}


const MainNew = ({ newsPage }: Props) => {

    const formattedLastPublicationDate = new Date(
        newsPage.last_publication_date
    ).toLocaleDateString("pt-br", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    return (
        <Link href={`/news/post/${newsPage.uid}`}>

            <div className="flex flex-col gap-2 md:flex-row hover:size-5 transition-transform duration-300 ease-in-out">
                <div className="flex flex-col gap-4 md:hidden">
                    <CircleHome hidden />
                    <h2 className="font-normal text-2xl">{newsPage.data.main_news_title[0].text}</h2>
                    <div className="flex w-full h-56 md:h-[400px]">
                        <CustomImage
                            src={newsPage.data.main_news_image.url}
                            alt={newsPage.data.main_news_image.alt}
                        />
                    </div>
                    <p className="text-left font-light text-xs line-clamp-8">
                        {newsPage.data.main_news_description[0].text}

                    </p>
                    <div className="font-normal text-xs flex justify-between items-center">
                        <p>Data da Publicação: <span className="font-light">{formattedLastPublicationDate}</span></p>
                        <p className=' text-sm font-semibold text-primary hover:text-secondary '>Saiba mais!</p>
                    </div>
                </div>

                <div className="hidden md:flex md:flex-row w-full h-80 gap-5">
                    <div className="flex w-6/12 h-full">
                        <CustomImage
                            src={newsPage.data.main_news_image.url}
                            alt={newsPage.data.main_news_image.alt}
                        />
                    </div>
                    <div className='flex flex-col w-6/12 gap-3'>
                        <CircleHome />
                        <h2 className="font-normal text-2xl">{newsPage.data.main_news_title[0].text}</h2>

                        <p className=" text-justify font-light text-xs line-clamp-8">
                            {newsPage.data.main_news_description[0].text}
                        </p>
                        <div className="font-normal text-xs flex justify-between items-center">
                            <p>Data da Publicação: <span className="font-light">{formattedLastPublicationDate}</span></p>
                            <p className=' text-base font-semibold text-primary hover:text-secondary '>Saiba mais</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MainNew
