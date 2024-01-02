import ComponentButton from '@/components/ComponentButton'
import CustomImage from '@/components/CustomImage'
import CustomImageScroll from '@/components/CustomImageScroll'
import ScrollOfImage from '@/components/ScrollOfImage'
import React from 'react'

interface Props {
  data: any
}

const AboutHome = ({ data }: Props) => {
  return (
    <div className="flex flex-col w-full sm:flex-row gap-4 justify-center">
      <ScrollOfImage>
        {data &&
          data.slices[0].items.map((item: any) => (
            <CustomImageScroll
              home
              src={item.image.url}
              alt={item.image.alt}
              key={item.image.id}
              title={item.title[0]?.text}
            />
          ))}
      </ScrollOfImage>
      <section className='flex flex-col items-center gap-4'>
        <div className="w-full h-56">
          <CustomImage src={data.about_image.url} alt={data.about_image.alt} />
        </div>
        <div className='flex flex-col gap-4 text-justify items-center'>
          <h2 className=' text-xl font-normal'>{data.about_title[0].text}</h2>
          <p className=' text-xs font-light'>{data.about_text[0].text}</p>
        </div>

        <ComponentButton text="Saiba mais" color="primary" link="/about" />
      </section>
    </div>
  )
}

export default AboutHome
