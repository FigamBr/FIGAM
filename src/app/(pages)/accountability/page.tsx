
import AccountabillityCard from '@/components/AccountabillityCard';
import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import React from 'react'

const Page = async () => {
    const prismic = createClient();
    const accountabilitiesPage = await prismic.getSingle("accountability");

    const accountabilitiesCard = await prismic.getAllByType("accountability_card", {
        pageSize: 10,
        orderings: ["my.post.first_publication_date desc"]
    });

    console.log(accountabilitiesPage)
    console.log(accountabilitiesCard)

    return (
        <div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className='text-2xl font-bold text-center'>{accountabilitiesPage.data.accountability_title}</h1>
                    <PrismicRichText field={accountabilitiesPage.data.accountability_text} components={{
                        paragraph: ({ children }) => <p className='text-medium text-justify'>{children}</p>
                    }} />
                </div>

                <div className='flex flex-col md:flex-row md:flex-wrap gap-5 items-center justify-between'>
                    {accountabilitiesCard && accountabilitiesCard.map((card) => (
                        <AccountabillityCard card={card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
