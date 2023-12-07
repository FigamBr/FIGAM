import { createClient } from "@/prismicio";
import { Button } from "@nextui-org/react";
import { asHTML } from "@prismicio/client";
import React from "react";

const page = async () => {
  const prismic = createClient();
  const about: any = await prismic.getByUID("about", "sobre-a-figam");
  console.log(about.data);

  return (
    <div>
      <div>
        <h1>{about.data.title1[0]?.text}</h1>
        <p>{about.data.text1[0]?.text}</p>
        <Button>Click me</Button>
      </div>
    </div>
  );
};

export default page;
