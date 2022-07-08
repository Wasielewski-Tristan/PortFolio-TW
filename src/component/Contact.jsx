import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-slate-900 to-black p-4 text-white' >
    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Contact
            </p>
            <p className='py-6'>
                Soumettez le formulaire ci-dessous pour prendre contact avec moi
            </p>
        </div>

        <div className='flex justify-center items-center'>
            <form 
                action="https://getform.io/f/97e9d971-58b7-4eca-b3d9-1682c5211c75" 
                method="POST"
                className='flex flex-col w-full md:w-1/2'>

                <input type="text" 
                name='name'
                placeholder='Entrez votre nom' 
                className=' m-2 p-2 bg-transparent border-2 rounded-md text-white focus-outline-none' 
                />
                <input type="text" 
                name='email'
                placeholder='Entrez votre adresse e-mail' 
                className='m-2 p-2 bg-transparent border-2 rounded-md text-white focus-outline-none' 
                />
                <textarea name="message" placeholder='Ecriver ici' rows="10" className='m-2 p-2 bg-transparent border-2 rounded-md text-white focus-outline-none'></textarea>

                <button type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Envoyer</button>
            </form>
        </div>
    </div>
</div>
)
}

export default Contact