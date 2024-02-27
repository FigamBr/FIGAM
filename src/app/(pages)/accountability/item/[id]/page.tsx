import CircleHome from '@/components/CircleHome'
import CustomImage from '@/components/CustomImage'
import { formactDate } from '@/helpers/formactDate'
import { createClient } from '@/prismicio'
import { Divider } from '@nextui-org/react'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    const prismic = createClient();
    // const post: any = await prismicClient.getByUID("post", params.id)
    // const postDate = formactDate(post.last_publication_date)

    // const description = post.data.description


    return (
        <div className="flex flex-col w-full gap-6">
            teste
        </div>
    );

}

export default page;
