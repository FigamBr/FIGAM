import CircleHome from '@/components/CircleHome'
import CustomImage from '@/components/CustomImage'
import { formactDate } from '@/helpers/formactDate'
import { prismicClient } from '@/services/prismic'
import { Divider } from '@nextui-org/react'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    try {
        const post: any = await prismicClient.getByUID("post", params.id)
        const postDate = formactDate(post.last_publication_date)

        console.log(post.data)

        const description = post.data.description

        const components: JSXMapSerializer = {
            image: (data: any) => {
                console.log(data)
                return (
                    <div className="flex w-full h-72 md:h-[600px] xl:h-[800px]">
                        <CustomImage
                            src={data.node.url}
                            alt={data.node.alt ?? 'Imagem da notícia'}
                        />
                    </div>
                )
            },
            paragraph: (data: any) => {
                console.log(data)
                return (
                    <p className=' text-xs lg:text-base text-justify font-light'>
                        {data.node.text}
                    </p>
                )
            }
        }

        return (
            <div className="flex flex-col w-full gap-6">
                <div className="flex flex-col gap-2 hover:size-5 transition-transform duration-300 ease-in-out">
                    <header className="flex flex-col gap-4  md:hidden">
                        <CircleHome hidden />
                        <h2 className="font-normal text-2xl">{post.data.title[0].text}</h2>
                        <div className="flex w-full h-56 md:h-[400px]">
                            <CustomImage
                                src={post.data.cover.url}
                                alt={post.data.cover.alt ?? 'Imagem da notícia'}
                            />
                        </div>
                        <div className="font-normal text-xs flex justify-between items-center">
                            <p>Data da Publicação: <span className="font-light">{postDate}</span></p>
                        </div>
                    </header>

                    <header className="hidden md:flex md:flex-row-reverse  w-full h-72 gap-5">
                        <div className="flex w-6/12 h-full">
                            <CustomImage
                                src={post.data.cover.url}
                                alt={post.data.cover.alt ?? 'Imagem da notícia'}
                            />
                        </div>
                        <div className='flex flex-col w-6/12 gap-3'>
                            <CircleHome />
                            <h2 className="font-normal text-2xl lg:text-4xl">{post.data.title[0].text}</h2>
                            <div className="font-normal text-xs lg:text-base flex justify-between items-center">
                                <p>Data da Publicação: <span className="font-light">{postDate}</span></p>
                            </div>
                        </div>
                    </header>

                </div>

                <Divider />

                <main className='flex flex-col gap-2'>
                    <PrismicRichText field={description} components={components} />
                </main>
            </div>
        );
    } catch (error) {
        console.error("Error fetching post:", error);
        // Pode ser apropriado renderizar uma mensagem de erro ou redirecionar para uma página de erro.
        return <p>Erro ao carregar o post.</p>;
    }
}

export default page;
