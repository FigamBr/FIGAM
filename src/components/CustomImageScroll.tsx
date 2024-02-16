// components/CustomImage.tsx
import Image from "next/image";
import Link from "next/link";

interface CustomImageScrollProps {
  src: string;
  alt: string;
  title: string;
  home?: boolean;
  uid?: string;
}

const CustomImageScroll: React.FC<CustomImageScrollProps> = ({
  title,
  src,
  uid,
  alt,
  home
}) => {
  return (
    <Link href={`calendar/${uid}`} className="relative p-2 hover:size transition-transform z-0 hover:shadow-md hover:z-10 duration-300 ease-in-out">
      <div className={`flex flex-col w-48 ${home ? "h-32 lg:h-44 lg:w-72" : "h-48"} lg:w-[300px] lg:h-[330px] gap-1`}>
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
      {!home && <p className="text-xs mb-1 lg:text-base font-light">{title}</p>}

    </Link>
  );
};

export default CustomImageScroll;
