import React from 'react';
import Circles from '@/components/Circles';
import ComponentButton from '@/components/ComponentButton';
import CustomImage from '@/components/CustomImage';

interface Props {
    data: any;
}

const CoreHome = ({ data }: Props) => {
    return (
        <div className="flex flex-col w-full gap-5 items-center">
            <div className="flex flex-col px-4 xl:px-0 gap-5 xl:flex-row">
                {/* Section with CustomImages */}
                <div className="flex flex-row justify-between relative px-4 xl:px-0 md:mb-5 xl:hidden gap-10">
                    <div className="w-36 h-40 sm:w-52 sm:h-60 lg:w-72 lg:h-80">
                        <CustomImage back src={data.image_core_1.url} alt={data.image_core_1.alt} />
                    </div>
                    <div className="w-36 h-40 sm:w-52 sm:h-60 lg:w-72 lg:h-80 xl:hidden">
                        <CustomImage back src={data.image_core_2.url} alt={data.image_core_2.alt} />
                    </div>
                </div>

                <div className="flex flex-row justify-between relative px-4 xl:px-0 md:mb-5">
                    <div className="w-36 h-40 sm:w-52 sm:h-60 xl:w-[300px] xl:h-[340px] hidden xl:block">
                        <CustomImage src={data.image_core_1.url} alt={data.image_core_1.alt} />
                    </div>
                </div>

                {/* Sections with Titles and Texts */}
                <section className="flex flex-col px-5 xl:px-0 gap-5">
                    {data.title_core_1 && data.text_core_1 && (
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-normal md:text-4xl">{data.title_core_1[0].text}</h2>
                            <p className="text-xs lg:text-base text-justify lg:text-left font-light">{data.text_core_1[0].text}</p>
                        </div>
                    )}

                    {data.title_core_2 && data.text_core_2 && (
                        <div className="flex flex-col gap-2 items-end">
                            <h2 className="text-xl font-normal md:text-4xl">{data.title_core_2[0].text}</h2>
                            <p className="text-xs lg:text-base text-justify lg:text-right font-light ">{data.text_core_2[0].text}</p>
                        </div>
                    )}

                </section>

                <div className="flex flex-row justify-between relative px-4 xl:px-0 md:mb-5">
                <div className="w-36 h-40 sm:w-52 sm:h-60 xl:w-[300px] xl:h-[340px] hidden xl:block">
                        <CustomImage src={data.image_core_2.url} alt={data.image_core_2.alt} />
                    </div>
                </div>
            </div>

            <Circles center />

            {/* Another Section with Titles and Texts */}
            <section className="flex flex-col items-center lg:w-5/6 gap-5">
                {data.main_core_tile && data.main_core_text && (
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="text-xl font-normal text-center md:text-4xl">{data.main_core_tile[0].text}</h2>
                        <p className="text-xs lg:text-base text-center font-light">{data.main_core_text[0].text}</p>
                    </div>
                )}
                <ComponentButton text="Ver mais" color="primary" link="/about" />
            </section>
        </div>
    );
}

export default CoreHome;
