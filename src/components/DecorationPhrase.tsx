import React from "react";
import { MdCircle } from "react-icons/md";

type Props = {
  phrases: string[];
};

const DecorationPhrase = ({ phrases }: Props) => {
  return (
    <div className="h-20 w-full flex flex-row items-center justify-center">
      <div className="flex flex-row h-full items-center gap-5 z-10">
        <div className="w-[2px] h-full bg-black"></div>
        <div className="flex flex-col">
          {phrases.map((phrase, index) => (
            <p key={index} className="text-paragraph-base text-xs font-normal">
              {phrase}
            </p>
          ))}
        </div>
        <div className="absolute w-[50px] right-8 top-36 flex z-20 flex-row gap-1">
          <MdCircle className="text-2xl text-primary" />
          <MdCircle className="text-2xl text-secondary" />
          <MdCircle className="text-2xl text-tertiary" />
        </div>
      </div>
    </div>
  );
};

export default DecorationPhrase;
