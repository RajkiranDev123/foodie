import React, { useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { Button } from './ui/button'
import chow from "@/assets/chow.png"
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("")
  const navigate=useNavigate()
  return (
    // mx-auto : parent adjusts , justify-center : children 
    <div className='flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20'>

      <div className='flex flex-col gap-10 md:w-[40%] '>

        <div className='flex flex-col gap-5'>
          <h1 className='font-bold md:font-extrabold md:text-5xl text-4xl text-gray-700 '>Order now!</h1>
          <p className='text-gray-500'>Enjoy the food anytime!</p>
        </div>

        <div className='relative flex items-center gap-2 w-full'>
          <Input className='pl-10 shadow-lg' type='text' value={searchText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />
          <Search className='text-gray-500 absolute inset-y-2 left-2' />
          <Button onClick={()=>navigate(`/search/${searchText}`)} className='bg-blue-700 hover:bg-blue-600'>Search</Button>
        </div>

      </div>

      <div>
        <img src={chow} alt='food' className='object-cover w-full max-h-[300px] rounded-3xl' />
      </div>

    </div>
  )
}

export default HeroSection