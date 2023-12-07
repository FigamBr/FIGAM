import React from "react";

interface Props {
  title: string;
  text: string;
}

const HeaderAndText = ({ text, title }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-h1">{title}</h1>
      <p className="text-paragraph-base text-justify">{text}</p>
    </div>
  );
};

export default HeaderAndText;
