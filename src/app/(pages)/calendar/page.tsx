import CustomImage from '@/components/CustomImage'
import EventCard from '@/components/EventCard'
import { prismicClient } from '@/services/prismic';
import Link from 'next/link'
import React from 'react'


const page = async () => {
    const calendarPage: any = await prismicClient.getByUID("calendar", "calendar_page_1");

    const events: any = await prismicClient.getAllByType("events_card", {
        pageSize: 10,
        orderings: ["my.post.first_publication_date desc"]
    });

    const data = calendarPage.data

    return (
        <div className="flex flex-col gap-5">

            <div className="flex flex-col gap-4">
                <h1 className='text-2xl font-bold text-center'>{data.calendar_tilte[0].text}</h1>
                <p className='text-medium text-justify'>{data.calendar_subtitle[0].text}</p>
            </div>

            <div className='flex flex-col lg:flex-row lg:flex-wrap gap-5 items-center justify-between'>
                {events && events.map((event: any) => (
                    <EventCard event={event} key={event.uid} />
                ))}
            </div>
        </div>
    )
}

export default page
