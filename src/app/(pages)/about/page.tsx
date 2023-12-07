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
          <figure className="relative w-full h-full">
            <Image
              src={about.data.image1.url}
              fill
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={about.data.image1.alt}
            />
          </figure>
        </section>
      </article>

      <article className="flex flex-col">
        <h1 className="text-h1">{about.data.title2[0]?.text}</h1>
        <p className="text-paragraph-base">{about.data.text2[0]?.text}</p>

        <section className="pt-5 flex w-full h-56 gap-1">
          <figure className="relative w-1/2 h-full">
            <Image
              src={about.data.image2.url}
              fill
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={about.data.image1.alt}
            />
          </figure>

          <div className="flex flex-col w-1/2 h-full gap-1">
            <figure className="relative w-full h-1/2">
              <Image
                src={about.data.image3.url}
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={about.data.image1.alt}
              />
            </figure>

            <figure className="relative w-full h-1/2">
              <Image
                src={about.data.image4.url}
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={about.data.image1.alt}
              />
            </figure>
          </div>
        </section>
      </article>
    </div>
  );
};

export default page;
