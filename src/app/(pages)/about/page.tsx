import Circles from "@/components/Circles";
import CustomImage from "@/components/CustomImage";
import CustomImageScroll from "@/components/CustomImageScroll";
import DecorationPhrase from "@/components/DecorationPhrase";
import HeaderAndText from "@/components/HeaderAndText";
import ScrollOfImage from "@/components/ScrollOfImage";
import { createClient } from "@/prismicio";
import React from "react";

const page = async () => {
  const prismic = createClient();
  const about: any = await prismic.getByUID("about", "sobre-a-figam");

  const slices = about.data.slices[0];

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex md:min-h-[400x] lg:h-[350px] flex-col md:flex md:flex-row md:items-center">
        <DecorationPhrase
          minHeight={["min-h-[300px]", "min-h-[300px]"]}
          lineHeight="h-20"
          phrases={about.data.phrases1[0]}
          flexRow="flex-row-reverse"
        />

        <article className="flex flex-col md:w-9/12">
          <div className="flex flex-col gap-2">
            <h1 className="text-h1 md:text-[56px]">
              {about.data.title1[0]?.text}
            </h1>
            <p className="text-paragraph-base text-justify">
              {about.data.text1[0]?.text}
            </p>
          </div>
        </article>
      </div>

      <section className="flex w-full h-56 md:h-[400px]">
        <CustomImage src={about.data.image1.url} alt={about.data.image1.alt} />
      </section>

      <article className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-center">
        <HeaderAndText
          width="w-6/12"
          title={about.data.title2[0]?.text}
          text={about.data.text2[0]?.text}
        />
        <section
          className="pt-5 flex w-full lg:w-6/12 lg:flex-row
          h-56 lg:min-h-[500px] gap-1 items-center justify-center"
        >
          <div className="flex flex-col w-1/2 h-full lg:h-[300px] gap-1">
            <CustomImage
              src={about.data.image2.url}
              alt={about.data.image2.alt}
            />
          </div>

          <div className="flex flex-col w-1/2 h-full gap-1">
            <CustomImage
              src={about.data.image3.url}
              alt={about.data.image3.alt}
            />
            <CustomImage
              src={about.data.image4.url}
              alt={about.data.image4.alt}
            />
          </div>
        </section>
      </article>

      <Circles center />

      <ScrollOfImage>
        {slices &&
          slices.items.map((item: any) => (
            <CustomImageScroll
              src={item.image.url}
              alt={item.image.alt}
              key={item.image.id}
              title={item.title[0]?.text}
            />
          ))}
      </ScrollOfImage>

      <Circles center />

      <div
        className="flex w-full flex-col md:min-h-[300px] lg:min-h-[300px]
       lg:flex-row gap-5 items-center justify-center"
      >
        <article className="flex flex-col lg:w-9/12">
          <HeaderAndText
            width="w-12/12"
            title={about.data.title3[0]?.text}
            text={about.data.text3[0]?.text}
          />
        </article>

        <DecorationPhrase
          phrases={about.data.phrases2[0]}
          minHeight={["min-h-fit", "min-h-[500px]"]}
          lineHeight="h-40"
          flexRow="flex-row"
          cicleEnd
          bottom
        />
      </div>
    </div>
  );
};

export default page;
