// components/CustomImage.tsx
import Image from "next/image";

interface CustomImageScrollProps {
  src: string;
  alt: string;
  title: string;
}

const CustomImageScroll: React.FC<CustomImageScrollProps> = ({
  title,
  src,
  alt,
}) => {
  return (
    <div className="relative w-40 lg:w-[300px] p-4 hover:size transition-transform duration-300 ease-in-out">
      <div className=" flex flex-col w-40 h-44 lg:w-[300px] lg:h-[330px] gap-1">
        <figure className="relative w-full h-full lg:mb-2">
          <Image
            src={src}
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={alt}
          />
        </figure>
      </div>
      <p className="text-xs mb-1 lg:text-base font-light">{title}</p>
    </div>
  );
};

export default CustomImageScroll;
