import React from 'react'
import { About, Admission, Footer, Gallery, Header, WhyUs } from '../Components/Index'

const Homepage = () => {
  return (
    <main>
        <Header/>
        <Admission/>
        <About/>
        <Gallery/>
        <WhyUs/>
        <Footer/>
    </main>
  )
}

export default Homepage