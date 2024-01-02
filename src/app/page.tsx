
import { createClient } from "@/prismicio";
import React from 'react'
import HeaderHome from './components/HeaderHome';
import AboutHome from "./components/AboutHome";

const Home = async () => {
  const prismic = createClient();
  const home: any = await prismic.getByUID("home", "home_page_1");

  const data = home.data
  console.log(data)
  return (
    <>
      <HeaderHome data={data} />
      <AboutHome data={data} />
    </>

  )
}

export default Home
