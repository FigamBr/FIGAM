// components/CustomImage.tsx
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt }) => {
  return (
    <figure className="relative w-full h-full">
      <Image src={src} fill objectFit="cover" alt={alt} />
    </figure>
  );
};

export default CustomImage;
