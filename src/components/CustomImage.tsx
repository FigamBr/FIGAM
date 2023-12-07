// components/CustomImage.tsx
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt }) => {
  return (
    <figure className="relative w-full h-full">
      <Image
        src={src}
        fill
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={alt}
      />
    </figure>
  );
};

export default CustomImage;
