
import { prismicClient } from '@/services/prismic';
import React from 'react'

const Page = async () => {
    const accountabilitiesPage: any = await prismicClient.getByUID("accountability", "accountability_page_1");

    const accountabilitiesCard: any = await prismicClient.getAllByType("accountability_card", {
        pageSize: 10,
        orderings: ["my.post.first_publication_date desc"]
    });

    console.log(accountabilitiesPage)
    console.log(accountabilitiesCard)

    return (
        <div>Page</div>
    )
}

export default Page
