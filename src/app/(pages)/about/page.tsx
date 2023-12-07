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
      <DecorationPhrase
        phrases={["Sobre nós.", "Sobre nossa missão", "Sobre nossa História"]}
      />

      <article className="flex flex-col">
        <HeaderAndText
          title={about.data.title1[0]?.text}
          text={about.data.text1[0]?.text}
        />

        <section className="pt-5 flex w-full h-56">
          <CustomImage
            src={about.data.image1.url}
            alt={about.data.image1.alt}
          />
        </section>
      </article>

      <article className="flex flex-col">
        <HeaderAndText
          title={about.data.title2[0]?.text}
          text={about.data.text2[0]?.text}
        />
        <section className="pt-5 flex w-full h-56 gap-1">
          <CustomImage
            src={about.data.image2.url}
            alt={about.data.image2.alt}
          />

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

      <article className="flex flex-col">
        <HeaderAndText
          title={about.data.title3[0]?.text}
          text={about.data.text3[0]?.text}
        />
      </article>
    </div>
  );
};

export default page;
