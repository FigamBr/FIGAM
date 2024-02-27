
import { createClient } from '@/prismicio';
import React from 'react'

const Page = async () => {
    const prismic = createClient();
    const accountabilitiesPage: any = await prismic.getByUID("accountability", "accountability_page_1");

    const accountabilitiesCard: any = await prismic.getAllByType("accountability_card", {
        pageSize: 10,
        orderings: ["my.post.first_publication_date desc"]
    });

    console.log(accountabilitiesPage)
    console.log(accountabilitiesCard)

    return (
        <div>
            <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-4">
                    {/* <h1 className='text-2xl font-bold text-center'>{data.calendar_tilte[0].text}</h1>
                    <p className='text-medium text-justify'>{data.calendar_subtitle[0].text}</p> */}
                </div>

                <div className='flex flex-col lg:flex-row lg:flex-wrap gap-5 items-center justify-between'>
                    {/* {events && events.map((event: any) => (
                        <EventCard event={event} key={event.uid} />
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Page
