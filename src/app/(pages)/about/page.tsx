import CustomImage from "@/components/CustomImage";
import DecorationPhrase from "@/components/DecorationPhrase";
import { createClient } from "@/prismicio";
import { Button } from "@nextui-org/react";
import { asHTML } from "@prismicio/client";
import Image from "next/image";
import React from "react";

const page = async () => {
  const prismic = createClient();
  const about: any = await prismic.getByUID("about", "sobre-a-figam");
  console.log(about.data);

  return (
    <div className="flex flex-col w-full gap-8">
      <DecorationPhrase
        phrases={["Sobre nós.", "Sobre nossa missão", "Sobre nossa História"]}
      />
      <article className="flex flex-col">
        <h1 className="text-h1">{about.data.title1[0]?.text}</h1>
        <p className="text-paragraph-base">{about.data.text1[0]?.text}</p>

        <section className="pt-5 flex w-full h-56">
          <CustomImage
            src={about.data.image1.url}
            alt={about.data.image1.alt}
          />
        </section>
      </article>

      <article className="flex flex-col">
        <h1 className="text-h1">{about.data.title2[0]?.text}</h1>
        <p className="text-paragraph-base">{about.data.text2[0]?.text}</p>
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
    </div>
  );
};

export default page;
