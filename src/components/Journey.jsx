import React from 'react'

const About = () => {
  return (
    <div name="journey" className='w-full h-screen bg-[#0a192F] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Mon parcours</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
              <p>Salut, c'est Mounir, heureux de vous voir ici !</p>
            </div>
            <div>
              <p>
                Ayant travailler dans le BTP durant 6 ans, j'ai décider de mener une reconversion
                professionnel dans le milieu du développement web. Voilà six mois que j'ai entamer ce
                gros projet, car je partais de zéro. Ayant un attrait pour les arts, le côté front, me 
                permet de mélanger ses deux aspects là, à savoir les arts et la programmation.
                Je continue d'apprendre et de développer mes compétences dans ce domaine.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About