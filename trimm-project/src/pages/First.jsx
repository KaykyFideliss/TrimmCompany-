import React from 'react'
import Navbar from '../components/Navbar'
import { TextHoverEffect } from "../components/hero-first/TextHoverEffectDemo" ;
import { Navigate } from 'react-router-dom';

const First = () => {
  return (
    <section className='bg-black w-full h-screen  flex flex-col justify-center items-center gap-10'>
<Navbar />
     
 <div className="w-full flex flex-col items-center justify-center text-center select-none py-20">

    

      {/* Linha 2 — maior / destaque */}
      <div className="w-full h-[300px]">
        <TextHoverEffect text="FIVON" />
      </div>


    </div>
<button className='bg-red-900 h-96 w-96'>TESTE</button>


    </section>
  )
}

export default First