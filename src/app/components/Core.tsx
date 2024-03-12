import React from 'react';
import Circles from '@/components/Circles';
import ComponentButton from '@/components/ComponentButton';
import CustomImage from '@/components/CustomImage';

interface Props {
    data: any;
}

const CoreHome = ({ data }: Props) => {
    return (
        <div className="flex flex-col w-full gap-5 items-center">
            <div className="flex flex-col xl:px-0 gap-5">
                <h2 className=' text-xl text-center font-normal md:text-4xl'>Equipamentos</h2>
                {/* Section with CustomImages */}
                {/* <div className="flex flex-row justify-between relative px-4 xl:px-0 md:mb-5 xl:hidden gap-10">
                    <div className="w-36 h-40 sm:w-52 sm:h-60 lg:w-72 lg:h-80">
                        <CustomImage back src={data.image_core_1.url} alt={data.image_core_1.alt} />
                    </div>
                    <div className="w-36 h-40 sm:w-52 sm:h-60 lg:w-72 lg:h-80 xl:hidden">
                        <CustomImage back src={data.image_core_2.url} alt={data.image_core_2.alt} />
                    </div>
                </div> */}

                {/* <div className="flex flex-row justify-between relative px-4 xl:px-0 md:mb-5">
                    <div className="w-36 h-40 sm:w-52 sm:h-60 xl:w-[300px] xl:h-[340px] hidden xl:block">
                        <CustomImage src={data.image_core_1.url} alt={data.image_core_1.alt} />
                    </div>
                </div> */}

                {/* Sections with Titles and Texts */}
                <section className="flex flex-col xl:px-0 gap-5">
                    {data.title_core_1 && data.text_core_1 && (
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-normal md:text-2xl">MUSEU: Museu de Arte e Memória de Alagoinhas ( MOMA)</h3>
                            <p className="text-xs lg:text-base text-justify font-light">
                                O Museu de Arte e Memória de Alagoinhas (MOMA) é um espaço cultural que celebra a rica história e expressões artísticas da região.
                                Localizado no coração de Alagoinhas, este museu encanta visitantes com suas coleções
                                variadas, que abrangem desde arte contemporânea até artefatos históricos que contam a
                                história da cidade e de seu povo. Com exposições dinâmicas e programas educacionais
                                envolventes, o MOMA convida os visitantes a explorar, aprender e se inspirar,
                                conectando-se com as raízes culturais e artísticas da comunidade local. É um ponto
                                de encontro vibrante onde passado e presente se fundem, proporcionando uma
                                experiência enriquecedora para todos os que o visitam.
                            </p>
                        </div>
                    )}

                    {data.title_core_2 && data.text_core_2 && (
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-lg font-normal md:text-2xl">PINACOTECA: Obras de artista locais e da região</h3>
                            <p className="text-xs lg:text-base text-justify font-light ">
                                A Pinacoteca de Alagoinhas é um tesouro artístico que celebra o
                                talento dos artistas locais e da região. Este espaço dedicado à arte é um reflexo
                                vibrante da rica diversidade cultural e criativa que define a comunidade de Alagoinhas e
                                seus arredores. Com uma coleção eclética que abrange uma variedade de estilos, técnicas e temas, a Pinacoteca oferece aos visitantes uma experiência imersiva na expressão artística única dessa área. Desde pinturas a esculturas e outras formas de arte visual, cada obra conta uma história e transmite uma sensação de identidade e pertencimento. Ao promover e celebrar o talento local, a Pinacoteca se torna um ponto de encontro cultural vital, onde artistas
                                e admiradores da arte se reúnem para compartilhar, apreciar e inspirar-se mutuamente.</p>
                        </div>
                    )}

                </section>

                <section className="flex flex-col xl:px-0 gap-5">
                    {data.title_core_1 && data.text_core_1 && (
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-normal md:text-2xl">BIBLIOTECA: Acervo temático: Antropologia, Arqueologia e Historia Regional.</h3>
                            <p className="text-xs lg:text-base text-justify font-light">A Biblioteca temática de Antropologia, Arqueologia e História Regional é um verdadeiro tesouro intelectual que enriquece a comunidade de Alagoinhas e seus arredores. Com um acervo
                                cuidadosamente selecionado, esta biblioteca oferece aos leitores uma oportunidade única de
                                explorar as profundezas do conhecimento humano e da história local. Desde obras clássicas até publicações
                                contemporâneas, os livros disponíveis abrangem uma ampla gama de tópicos, incluindo culturas antigas, descobertas arqueológicas, tradições regionais e eventos históricos que moldaram a identidade da comunidade. Além disso, a biblioteca serve
                                como um centro de aprendizado e pesquisa, onde estudiosos, pesquisadores
                                e entusiastas podem acessar recursos valiosos e realizar estudos aprofundados. Com sua missão de
                                preservar e promover o conhecimento sobre a antropologia, arqueologia e história regional, esta biblioteca
                                desempenha um papel vital na educação e na preservação da herança cultural dessa região.</p>
                        </div>
                    )}

                    {data.title_core_2 && data.text_core_2 && (
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-lg font-normal md:text-2xl">GALERIA DE ARTE: Exposições de artistas consagrados</h3>
                            <p className="text-xs lg:text-base text-justify font-light ">
                                A Galeria de Arte de Alagoinhas é um destino imperdível para os amantes da arte, oferecendo exposições emocionantes e inspiradoras de artistas consagrados. Situada no coração da cidade, esta galeria é um espaço dedicado à apreciação e celebração da excelência artística. Com uma programação dinâmica, a galeria apresenta obras de renomados artistas locais, nacionais e internacionais, abrangendo uma ampla variedade de estilos, técnicas e temas. Cada exposição é uma jornada visual que cativa os espectadores, provocando reflexões, despertando emoções e inspirando novas perspectivas. Além de oferecer um vislumbre do talento criativo de artistas estabelecidos, a galeria também serve como uma plataforma para o diálogo cultural, promovendo o intercâmbio de ideias e experiências entre artistas, críticos e o público em geral. Com seu compromisso de trazer o melhor da arte para a comunidade, a Galeria de Arte de Alagoinhas é um espaço vital que enriquece a vida cultural da região.</p>
                        </div>
                    )}
                </section>

                <section className="flex flex-col xl:px-0 gap-5">
                    {data.title_core_1 && data.text_core_1 && (
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-normal md:text-2xl">CENTRO DE PESQUISAS; CEDOMA- Centro de Estudos e Memoria de Alagoinhas.</h3>
                            <p className="text-xs lg:text-base text-justify font-light">O Centro de Estudos e Memória de Alagoinhas (CEDOMA) é um farol intelectual que ilumina o passado, presente e futuro desta cidade vibrante. Como um centro de pesquisas dedicado ao estudo e preservação da história local, o CEDOMA desempenha um papel crucial na promoção do conhecimento e na valorização da identidade cultural de Alagoinhas e sua região circundante. Equipado com recursos abrangentes, incluindo documentos históricos, fotografias, registros arqueológicos e muito mais, o CEDOMA oferece um ambiente propício para a investigação acadêmica e o aprendizado comunitário. Além disso, o centro organiza eventos educativos, palestras e exposições que enriquecem a compreensão pública da história e patrimônio local. Ao servir como um guardião da memória coletiva da cidade, o CEDOMA fortalece os laços entre as gerações, inspirando um maior apreço pela herança cultural e contribuindo para um futuro mais informado e resiliente para Alagoinhas e seus habitantes.</p>
                        </div>
                    )}

                    {data.title_core_2 && data.text_core_2 && (
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-lg font-normal md:text-2xl">AUDITÓRIO: Ciclo de palestras, oficinas e de  Áudio Visual.</h3>
                            <p className="text-xs lg:text-base text-justify font-light ">
                                O Auditório de Alagoinhas é um espaço dinâmico e multifuncional que abriga uma variedade de eventos, incluindo ciclos de palestras, oficinas e apresentações audiovisuais. Com sua infraestrutura moderna e ambiente acolhedor, o auditório proporciona um cenário ideal para o compartilhamento de conhecimento, aprendizado e expressão criativa. Durante os ciclos de palestras, renomados palestrantes abordam uma ampla gama de tópicos, desde questões sociais e científicas até temas culturais e educacionais, oferecendo uma oportunidade valiosa para o diálogo e a reflexão. As oficinas realizadas no auditório proporcionam experiências práticas e interativas, permitindo que os participantes desenvolvam habilidades em diversas áreas, como arte, música, tecnologia e muito mais. Além disso, as apresentações audiovisuais cativam o público com filmes, documentários, performances teatrais e outras formas de expressão artística, enriquecendo a experiência cultural da comunidade. Com uma programação diversificada e envolvente, o Auditório de Alagoinhas é um ponto de encontro vital onde pessoas de todas as idades e interesses podem se reunir, aprender e se inspirar.</p>
                        </div>
                    )}
                </section>



                {/* <div className="flex flex-row justify-between relative px-4 xl:px-0 md:mb-5">
                    <div className="w-36 h-40 sm:w-52 sm:h-60 xl:w-[300px] xl:h-[340px] hidden xl:block">
                        <CustomImage src={data.image_core_2.url} alt={data.image_core_2.alt} />
                    </div>
                </div> */}
            </div>

            <Circles center />

            {/* Another Section with Titles and Texts */}
            <section className="flex flex-col items-center lg:w-5/6 gap-5">
                {data.main_core_tile && data.main_core_text && (
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="text-xl font-normal text-center md:text-4xl">{data.main_core_tile[0].text}</h2>
                        <p className="text-xs lg:text-base text-center font-light">{data.main_core_text[0].text}</p>
                    </div>
                )}
                <ComponentButton text="Ver mais" color="primary" link="/about" />
            </section>
        </div >
    );
}

export default CoreHome;
