import React from 'react'
import CSS from '../component/photo/css.png'
import GitHub from '../component/photo/github.png'
import HTML from '../component/photo/html.png'
import JavaScript from '../component/photo/javascript.png'
import ReactImage from '../component/photo/react.png'
import TailWind from '../component/photo/tailwind.png'


const Experience = () => {


    const tech = [
        {
            id: 1,
            src: ReactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 2,
            src: TailWind,
            title: 'TailWind',
            style: 'shadow-sky-400'
        },
        {
            id: 3,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: GitHub,
            title: 'GitHub',
            style: 'shadow-orange-500'
        },
    ]


  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-slate-900 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Experience
                </p>
                <p className='py-6'>
                    Voici les technologies avec lesquelles j'ai travaillé
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                tech.map(({id, src, title, style}) => (
                                    <div key={id} 
                                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Experience