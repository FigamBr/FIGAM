import React from "react";
import { MdCircle } from "react-icons/md";

interface Props {
  hidden?: boolean;
}

const CircleNews = ({ hidden }: Props) => {
  return (
    <div className={`w-[60px] flex flex-row gap-1 sm:self-start`}>
      <MdCircle className="text-2xl text-primary" />
      <MdCircle className="text-2xl text-secondary" />
      <MdCircle className="text-2xl text-tertiary" />
    </div>
  );
};

export default CircleNews;
