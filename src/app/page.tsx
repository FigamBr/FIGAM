import Circles from '@/components/Circles'
import ComponentButton from '@/components/ComponentButton'
import { PageUnderConstruction } from '@/components/PageUnderConstruction'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col w-full items-center gap-6">

      <div className='flex flex-col gap-3 items-center text-center'>
        <div className='flex gap-4'>
          <Circles />
          <h2 className='font-normal text-2xl i'>FIGAM</h2>
          <Circles />
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className=' text-base font-normal'>FUNDAÇÃO IRACI GAMA DE CULTURA</h2>
          <p className=' text-xs font-light'>A Fundação Iraci Gama de Cultura (FIGAM) é uma instituição criada em 2002,
            mas tem a memória de um quarto de século de pesquisa histórica sobre a
            cidade de Alagoinhas e de trabalhos artísticos, culturais, eventos e criação
            de instituições para benefício da comunidade.
          </p>
        </div>
        <div className='flex gap-4'>
          <ComponentButton text='Saiba mais' color='primary' link='/about' />
          <ComponentButton text='Contato' color='secondary' link='/contact' />
        </div>
      </div>

    </div>
  )
}

export default Home
