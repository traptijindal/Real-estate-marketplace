import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Sahand Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
    
          
         < p className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
        
          Let's get started...</p>
        
      </div>
      <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-4 rounded-md shadow-md">
          <img
            src="/newh1.webp"
            alt="Image 1"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-800 text-lg font-semibold">Box 1</p>
          <p className="text-gray-600">Description for box 1.</p>
        </div>

        
        <div className="bg-white p-4 rounded-md shadow-md">
          <img
            src="/newh1.webp"
            alt="Image 2"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-800 text-lg font-semibold">Box 2</p>
          <p className="text-gray-600">Description for box 2.</p>
        </div>

        
        <div className="bg-white p-4 rounded-md shadow-md">
          <img
            src="/newh1.webp"
            alt="Image 3"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-800 text-lg font-semibold">Box 3</p>
          <p className="text-gray-600">Description for box 3.</p>
        </div>

       
        <div className="bg-white p-4 rounded-md shadow-md">
          <img
            src="/newh1.webp"
            alt="Image 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-800 text-lg font-semibold">Box 4</p>
          <p className="text-gray-600">Description for box 4.</p>
        </div>
      </div>
    </div>



     </div>
      </div>
  )
}
