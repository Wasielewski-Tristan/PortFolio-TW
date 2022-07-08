import React from 'react'
import portfolioTW from './photo/portfolio/PortfolioTW.JPG'
import appBrand from './photo/portfolio/appbrand.JPG'


const Portfolio = () => {


    const portfolios = [
      {
        id: 1,
        src:portfolioTW 
      },
      {
        id: 2,
        src:appBrand
      },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-slate-900 to-slate-900 p-4 text-white md;h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
              Portfolio
            </p>
            <p className='py-6'>
              Découvrez certains de mes travaux ici
            </p>
        </div>

<div  className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 '>

{portfolios.map(({id, src}) => (
        
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
            <img 
            src={src} 
            alt="" 
            className='rounded-md '
            />
          </div>

    ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio