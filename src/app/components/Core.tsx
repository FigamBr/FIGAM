import React from 'react';
import Circles from '@/components/Circles';
import ComponentButton from '@/components/ComponentButton';
import { createClient } from '@/prismicio';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

interface Props {
    data: any;
}

const CoreHome = async ({ data }: Props) => {
    const prismic = createClient();

    const events: any = await prismic.getAllByType("equipment");

    return (
        <div className="flex flex-col w-full gap-5 items-center">
            <div className="flex flex-col xl:px-0 gap-5">
                <h2 className=' text-xl text-center font-normal md:text-4xl'>Equipamentos</h2>

                <section className="flex flex-col xl:px-0 gap-5">
                    {events && events.map((event: any) => (
                        <div className="flex flex-col gap-2 border border-primary p-4 rounded-md" key={event.id}>
                            <h3 className="text-lg font-normal md:text-2xl">{event.data.title}</h3>
                            <PrismicRichText field={event.data.text} components={{
                                paragraph: ({ children }) => (
                                    <p className="text-xs lg:text-base text-justify font-light">
                                        {children}
                                    </p>
                                ),
                                heading4: ({ children }) => (
                                    <h4 className="text-xl font-normal">
                                        {children}
                                    </h4>
                                )
                            }} />
                            <PrismicLink field={event.data.read_more} >
                                <span className="text-secondary text-lg font-semibold">Saiba mais</span>
                            </PrismicLink>
                        </div>
                    ))}
                </section>
            </div>

            <Circles center />

            <section className="flex flex-col items-center lg:w-5/6 gap-5">
                {data.main_core_tile && data.main_core_text && (
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="text-xl font-normal text-center md:text-4xl">{data.main_core_tile[0].text}</h2>
                        <p className="text-xs lg:text-base text-center font-light">{data.main_core_text[0].text}</p>
                    </div>
                )}
                <ComponentButton text="Ver mais" color="primary" link="/about" />
            </section>
        </div >
    );
}

export default CoreHome;
