import React from 'react'

const Cv = () => {
return (
    <div name="cv" className='bg-gradient-to-b  from-slate-900 to-gray-800 w-full h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>CV</p>
                </div>

                <div className='text-xl mt-10'>
                <div className='pb-8'>
                    <p className='text-2xl font-bold border-gray-500'>Expérience :</p>
                </div>
                    <div>
                        <h1>
                            Dépannage et installation électique :
                        </h1>
                        <h2>
                            - Cegelec Valenciennes Tertiaire du 02/08/2021 au 03/09/2021
                        </h2>
                        <h2>
                            - Cegelec Valenciennes Tertiaire du 25/02/2019 au 16/03/2019
                        </h2>
                        <h2>
                            - Cegelec Valenciennes Tertiaire  du 10/06 au 29/06/2019
                            <br />
                            ( Installation électrique au Stade de Valenciennes pendant la coupe du monde féminin de football )
                        </h2>
                        <h2>
                            - Cegelec Valenciennes Tertiaire du 02/08/2021 au 03/09/2021
                        </h2>
                    </div>
                </div>

            <br />

            <div className='text-xl mt-10'>
                    <div>
                        <h1>
                                Technicien Réseaux :
                        </h1>
                        <h2>
                            - TechCrea Solution / FirstHeberg à Valenciennes du 12/11/2019 au 13/12/2019
                        </h2>
                        <h2>
                            - TechCrea Solution / FirstHeberg à Valenciennes du 21/09/2020 au 17/11/2020
                        </h2>
                    </div>
                </div>

                <br />

                <div className='text-xl mt-10'>
                <div className='pb-8'>
                    <p className='text-2xl font-bold border-gray-500'>Études et Formations :</p>
                </div>
                    <div>
                        <h1>
                            Lycée Maximilien de Ropbespierre à Lens de 2018 à 2021
                        </h1>
                        <h2>
                            - Baccalauréat Systèmes Numériques
                        </h2>
                        <h2>
                            - BEP Système Numériques
                        </h2>

                        <br />

                        <h1>
                            Pop School
                        </h1>
                        <h2>
                            - En cours de formation
                        </h2>
                        </div>
                        
                    </div>

                    <br />

                    <div className='flex items-center'>
                        <h1 className='font-bold text-xl'>CV en PDF:</h1>
                        <a href="/Tristan Wasielewski CV.pdf"><button type="button" class="m-2 inline-block px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-tight uppercase 
                        rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 
                        active:shadow-lg transition duration-150 ease-in-out"> CV </button> </a>
                    </div>
        </div>
    </div>
)
}

export default Cv