import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white relative'>
        <div className='w-full h-[400px] relative'>
          <img
            className="absolute w-full h-[400px] object-cover"
            src="https://www.slashgear.com/img/gallery/netflix-4k-streaming-on-macos-big-sur-to-require-a-t2-security-chip/intro-import.jpg"
            alt="/"
          />
          <div className='bg-black/60 absolute top-0 left-0 w-full h-[400px]'></div>
          <div className='absolute top-[50%] left-4 md:left-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
        </div>
      </div>

      {/* Push SavedShows below the hero */}
      <div className="mt-[40px]">
        <SavedShows />
      </div>
    </>
  )
}

export default Account
