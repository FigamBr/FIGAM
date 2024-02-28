import React from 'react'
import { AccountabilityCardDocument, AllDocumentTypes } from '../../prismicio-types'

import { FaMoneyCheck } from "react-icons/fa";
import { ImLibreoffice } from "react-icons/im";
import Link from 'next/link'
import { formactDate } from '@/helpers/formactDate';

interface Props {
    card: AccountabilityCardDocument
}

const AccountabillityCard = ({ card }: Props) => {
    const cardDate = formactDate(card.first_publication_date)

    return <Link href={`/accountability/${card.uid}`} className='flex w-full flex-col items-center justify-center sm:w-[45%] xl:w-[30%]'>
        <div className='flex flex-row  rounded-xl  w-full shadow-xl justify-between  hover:size-5 transition-transform duration-300 ease-in-out'>
            <div className="w-2/6 p-2 flex items-center justify-center">
                {card.data.type === "Prestação de Contas" ? <FaMoneyCheck className="w-full h-full" /> : <ImLibreoffice className="w-full h-full" />}
            </div>

            <div className='flex flex-col flex-1 p-2 items-center text-center justify-center gap-3 '>
                <h3 className='text-xl text-secondary lg:text-xl xl:text-3xl lg:font-bold font-semibold line-clamp-3 xl:line-clamp-2'>{card.data.title}</h3>
                <div className='flex flex-col gap-2'>
                    <h4 className=' text-xs lg:text-base line-clamp-4'>#{card.data.type}</h4>
                    <span className="font-light">{cardDate}</span>
                </div>
            </div>
        </div >
    </Link>
}

export default AccountabillityCard
