import CircleHome from '@/components/CircleHome'
import CustomImage from '@/components/CustomImage'
import { formactDate } from '@/helpers/formactDate'
import { prismicClient } from '@/services/prismic'
import { Divider } from '@nextui-org/react'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import React from 'react'
import { EventsCardDocument } from '../../../../../prismicio-types'

const page = async ({ params }: { params: { id: string } }) => {
    const event: any = await prismicClient.getByUID("events_card", params.id)

    const eventeDate = formactDate(event.data.event_date)

    const components: JSXMapSerializer = {
        image: (data: any) => {

            return (
                <div className="flex w-full h-72 md:h-[600px] xl:h-[800px]">
                    <CustomImage
                        src={data.node.url}
                        alt={data.node.alt ?? 'Imagem da notícia'}
                    />
                </div>
            )
        },
        paragraph: (data: any) => {
            return (
                <p className=' text-xs lg:text-base text-justify font-light'>
                    {data.node.text}
                </p>
            )
        }
    }

    console.log(event)

    return (
        <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col gap-2 ">
                <header className="flex flex-col gap-4  md:hidden">
                    <CircleHome hidden />
                    <h2 className="font-normal text-4xl">{eventeDate}</h2>
                    <div className="font-normal text-justify text-base lg:text-base flex justify-between items-center">
                        <p>{event.data.event_text[0].text}</p>
                    </div>
                    <div className="flex w-full h-56 md:h-[400px]">
                        <CustomImage
                            src={event.data.event_image.url as string}
                            alt={event.data.event_image.alt as string}
                        />
                    </div>
                </header>

                <header className="hidden md:flex md:flex-row-reverse  w-full h-72 gap-5">
                    <div className="flex w-6/12 h-full">
                        <CustomImage
                            src={event.data.event_image.url as string}
                            alt={event.data.event_image.alt as string}
                        />
                    </div>
                    <div className='flex flex-col w-6/12 gap-3'>
                        <CircleHome />
                        <h2 className="font-normal text-4xl lg:text-4xl">{eventeDate}</h2>
                        <div className="font-normal text-lg lg:text-base flex justify-between items-center">
                            <p>{event.data.event_text[0].text}</p>
                        </div>
                    </div>
                </header>

            </div>

            <Divider />

            <main className='flex flex-col gap-2'>
                <PrismicRichText field={event.data.event_text} components={components} />
            </main>
        </div>
    )
}

export default page
