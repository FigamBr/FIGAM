import React from "react";
import { MdCircle } from "react-icons/md";

interface Props {
  center?: boolean;
  end?: boolean;
}

const Circles = ({ center, end }: Props) => {
  const containerClass = center
    ? "self-center right-8 top-36"
    : `relative md:${end ? "self-end" : "self-start"} self-end bottom-5 md:top-0 md:left-0`;

  return (
    <div className={`w-[60px] flex z-20 flex-row gap-1 ${containerClass}`}>
      <MdCircle className="text-2xl text-primary" />
      <MdCircle className="text-2xl text-secondary" />
      <MdCircle className="text-2xl text-tertiary" />
    </div>
  );
};

export default Circles;
