import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>👋 Salut ! Je me présente,</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Bernia Mounir</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892B0]'>Je suis développeur frontend junior.</h2>
            <p className='text-[#8892B0] py-4 max-w-[700px]'>Je suis un développeur front junior, actuellement je me concentre dans l'apprentissage de framework comme Vue et React.</p>
            <p className='text-[#8892B0] py-4 max-w-[700px]'>Passionné dans ce que je fait, mon objectif est de continuer d'apprendre et de me perfectionner.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    Voir mon boulot 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home