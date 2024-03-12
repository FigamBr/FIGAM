import CircleHome from '@/components/CircleHome'
import CustomImage from '@/components/CustomImage'
import { formactDate } from '@/helpers/formactDate'
import { Divider } from '@nextui-org/react'
import { JSXMapSerializer, PrismicImage, PrismicRichText } from '@prismicio/react'
import React from 'react'
import { createClient } from '@/prismicio'

const page = async ({ params }: { params: { id: string } }) => {
    const prismic = createClient();
    const event: any = await prismic.getByUID("events_card", params.id)

    const eventeDate = formactDate(event.data.event_date)

    const components: JSXMapSerializer = {
        image: (data: any) => {
            return (
                <div className="flex w-full ">
                    <PrismicImage
                        field={data.node}
                        width={data.node.dimensions.width / 2}
                        height={data.node.dimensions.height / 2}

                    />
                </div>
            )
        },
        paragraph: ({ children }) => {
            return (
                <p className=' text-xs lg:text-base text-justify font-light'>
                    {children}
                </p>
            )
        }
    }

    return (
        <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col gap-2 ">
                <header className="flex flex-col gap-4 md:hidden">
                    <CircleHome hidden />
                    <h2 className="font-normal text-xl">{eventeDate}</h2>
                    <div className="font-normal text-justify text-3xl lg:text-base flex justify-between items-center">
                        <p>{event.data.event_title[0].text}</p>
                    </div>
                    <div className="flex w-full h-96">
                        <CustomImage
                            src={event.data.event_image.url as string}
                            alt={event.data.event_image.alt as string}
                        />
                    </div>

                </header>

                <header className="hidden md:flex md:flex-row-reverse w-full h-96 gap-5">
                    <div className="flex w-6/12 h-full">
                        <CustomImage
                            src={event.data.event_image.url as string}
                            alt={event.data.event_image.alt as string}
                        />
                    </div>
                    <div className='flex flex-col w-6/12 gap-3'>
                        <CircleHome />
                        <h2 className="font-normal text-xl lg:text-xl">{eventeDate}</h2>
                        <div className="font-bold text-lg lg:text-3xl flex justify-between items-center">
                            <p>{event.data.event_title[0].text}</p>
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
