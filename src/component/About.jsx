import React from 'react'

const About = () => {
  return (
  <div name="A propos de Moi" className='w-full h-screen bg-gradient-to-b from-gray-800 to-slate-900 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>À Propos De Moi</p>
            </div>
            <p className='text-xl mt-20'>
                Je suis Tristan Wasielewski née le 18/07/2003, Actuellement en formation de Développeur Web Full-Stack
                j'apprend a utiliser plusieur langage comme Html, CSS, JavaScript mais aussi Python et PHP. <br />
                J'utilise aussi des FrameWork t'elle que TailWind, BootStrap, React, VueJs.
            </p>

            <br />

            <p className='text-xl'>
                Avant de me lancer dans le développement web j'ai obtenu un Bac Pro Systèmes Numériques,
                Grâce à se bac j'ai pu découvrir le monde du travaille en stage pendant plusieurs mois
                j'effectuais des tâches d'Électricien, Techniciens Systèmes et Réseaux et d'Administrateur Réseaux.
            </p>
        </div>
  </div>
  );
}

export default About