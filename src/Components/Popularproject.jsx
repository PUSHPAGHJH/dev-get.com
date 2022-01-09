import React from 'react'

const Popularproject = () => {
    return (
        <div>
            
            <h1>Popular Projects : </h1>
            <div className=' bg-gray-100 flex flex-wrap justify-center'>

        <div className='flex flex-col bg-white  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-20 m-6' src="./images/calculator.png" alt='error loading'/>
            
            <h2 className=' bg-cyan-300 text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Calculator</h2>

        </div>


        <div className='flex flex-col bg-black rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-20 m-6' src="./images/clock.png" alt='error loading'/>
            
            <h2 className=' bg-cyan-300  hover:bg-gray-200 text-center pb-2  transition-all duration-500 text-black cursor-pointer px-2'>Clock</h2>

        </div>

        <div className='flex flex-col bg-blue-300  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-20 m-6' src="./images/form.png" alt='error loading'/>
            
            <h2 className=' bg-cyan-300 text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Form</h2>


        </div>


        <div className='flex flex-col bg-gray-700  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-20 m-6' src="./images/slotmachine.png" alt='error loading'/>
            
            <h2 className=' bg-cyan-300 text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Slot Machine Game</h2>

        </div>

        </div>
    )


        </div>
    )
}

export default Popularproject;

