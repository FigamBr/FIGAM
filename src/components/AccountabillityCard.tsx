import React from 'react'
import { AccountabilityCardDocument, AllDocumentTypes } from '../../prismicio-types'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import { ImLibreoffice } from "react-icons/im";
import Link from 'next/link'

interface Props {
    card: AccountabilityCardDocument
}


const AccountabillityCard = ({ card }: Props) => {
    return <Link href={`/accountability/${card.uid}`} className='flex w-full flex-col items-center justify-center sm:w-[45%] md:w-[30%]'>
        <div className='flex flex-col  rounded-xl  w-full shadow-xl justify-between  hover:size-5 transition-transform duration-300 ease-in-out'>
            <div className="w-full h-40 lg:h-60">
                <ImLibreoffice className="w-full h-full" />
            </div>

            <div className='flex flex-col p-2 items-center text-center justify-center gap-3 '>
                <h3 className='text-3xl text-secondary lg:text-4xl xl:text-5xl lg:font-bold font-semibold line-clamp-3 xl:line-clamp-2'>{card.data.title}</h3>
                <div className='flex flex-col gap-4'>
                    <h4 className=' text-xs lg:text-base font-light line-clamp-4'>#{card.data.type}</h4>
                </div>
            </div>
        </div >
    </Link>
}

export default AccountabillityCard
