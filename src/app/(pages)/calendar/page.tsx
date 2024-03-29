import EventCard from '@/components/EventCard'
import { createClient } from '@/prismicio';
import React from 'react'


const page = async () => {
    const prismic = createClient();
    const calendarPage: any = await prismic.getByUID("calendar", "calendar_page_1");

    const events: any = await prismic.getAllByType("events_card", {
        pageSize: 10,
        orderings: ["my.events_card.event_date"]
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
