import React from "react";
import { MdCircle } from "react-icons/md";

interface Props {
  center?: boolean;
}

const Circles = ({ center }: Props) => {
  const containerClass = center
    ? "self-center right-8 top-36"
    : "absolute right-8 top-36";

  return (
    <div className={`w-[50px] flex z-20 flex-row gap-1 ${containerClass}`}>
      <MdCircle className="text-2xl text-primary" />
      <MdCircle className="text-2xl text-secondary" />
      <MdCircle className="text-2xl text-tertiary" />
    </div>
  );
};

export default Circles;
