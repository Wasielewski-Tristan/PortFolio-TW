import React from 'react';
import  Picture from './photo/moi.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="accueil" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                  <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm Full Stack Developer
                  </h2>
                  <p className='text-gray-500 py-4 max-w-md'>
                  Je suis jeune dans le monde du Dev Web et a la recherche de connaissance.
                  Actuellement j'aime travailler sur des applications web en utilisant des technologies
                  comme VueJS, React, Tailwind, BootStrap, JS et HTML/CSS.
                  </p>

                  <div>
                      <Link
                      to="portfolio"
                      smooth duration={500}
                      className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                          <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                      </Link>
                      
                      <Link
                      to="cv"
                      smooth duration={500}
                      className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out'>
                        Cv
                        <span className='group-hover:rotate-90 duration-300'>
                          <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                      </Link>
                  </div>
                  
                </div>
                <div>
                  <img src={Picture} alt="mypic" className='rounded-2xl' />
                </div>
              </div>
            </div>
  )
}

export default Home
