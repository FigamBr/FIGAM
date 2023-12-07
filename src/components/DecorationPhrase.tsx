import React from "react";
import Circles from "./Circles";


type PhrasesData = {
  text1: [{ text: string }];
  text2: [{ text: string }];
  text3: [{ text: string }];
};

type Props = {
  phrases: PhrasesData;
};

const DecorationPhrase = ({ phrases }: Props) => {
  const { text1, text2, text3 } = phrases;

  return (
    <div className="h-20 w-full flex flex-row items-center justify-center">
      <div className="flex flex-row h-full pl-10 z-0 self-center items-center gap-5">
        <div className="w-[2px] h-full bg-black"></div>
        <div className="flex flex-col">
          <p className="text-paragraph-base text-xs font-normal">
            {text1[0]?.text}
          </p>
          <p className="text-paragraph-base text-xs font-normal">
            {text2[0]?.text}
          </p>
          <p className="text-paragraph-base text-xs font-normal">
            {text3[0]?.text}
          </p>
        </div>
        <Circles />
      </div>
    </div>
  );
};

export default DecorationPhrase;
