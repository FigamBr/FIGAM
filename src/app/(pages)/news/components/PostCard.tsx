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
    console.log(post)
    return (
        <Link href={`/post/post/${post.uid}`} className='flex flex-col items-center justify-center'>
            <div className='flex flex-col w-10/12 shadow-xl hover:size-5 transition-transform duration-300 ease-in-out'>
                <div className=" w-full h-40">
                    <CustomImage
                        src={post.data.cover.url}
                        alt={post.data.cover.alt}
                    />
                </div>
                <div className='flex flex-col gap-1 p-5'>
                    <h3 className='text-sm font-medium line-clamp-3'>
                        {post.data.title[0].text}
                    </h3>
                    <p className=' text-xs font-light'>
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
