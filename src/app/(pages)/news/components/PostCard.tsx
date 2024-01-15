import CustomImage from '@/components/CustomImage'
import { formactDate } from '@/helpers/formactDate'
import { Card, Divider } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

type Props = {
    post: any
}

const PostCard = ({ post }: Props) => {
    const postDate = formactDate(post.last_publication_date)

    return (
        <Link href={`/news/post/${post.uid}`} className='flex flex-col items-center  justify-center w-10/12 lg:w-[48%]'>
            <div className='flex flex-col w-full shadow-xl min-h-[400px] lg:min-h-[520px] justify-between  hover:size-5 transition-transform duration-300 ease-in-out'>
                <div className=" w-full h-40 lg:h-60">
                    <CustomImage
                        src={post.data.cover.url}
                        alt={post.data.cover.alt}
                    />
                </div>
                <div className='flex flex-col gap-1 p-5 h-56 lg:h-64 justify-between '>
                    <h3 className='text-sm lg:text-xl font-medium line-clamp-3 xl:line-clamp-2'>
                        {post.data.title[0].text}
                    </h3>
                    <p className=' text-xs lg:text-base font-light line-clamp-4'>
                        {post.data.description[0].text}
                    </p>
                    <Divider />
                    <div className="font-normal text-xs flex justify-between items-center">
                        <p>Data: <span className="font-light">{ }</span>{postDate}</p>
                        <p className=' text-sm font-semibold text-primary hover:text-secondary '>Saiba mais!</p>
                    </div>
                </div>

            </div>
        </Link>

    )
}

export default PostCard
