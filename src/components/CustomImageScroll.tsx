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
    <div className="relative w-40  ">
      <div className=" flex flex-col w-40 h-44 gap-1">
        <figure className="relative w-full h-full">
          <Image
            src={src}
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={alt}
          />
        </figure>
      </div>
      <p className="text-xs mb-1  font-light">{title}</p>
    </div>
  );
};

export default CustomImageScroll;
