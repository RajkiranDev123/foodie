import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

type Props = {}

const AvailableMenu = (props: Props) => {
    const navigate=useNavigate()
    return (
        <div className='md:p-4'>
            <h1 className='text-xl md:text-2xl font-extrabold mb-6'>Available Menus</h1>

            <div className='grid md:grid-cols-3 space-y-4 md:space-y-6'>

                <Card className='max-w-xs mx-auto rounded-lg shadow-lg overflow-hidden '>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4mFh0k1RhIJQB_SwZD5AedrZcb430mzV5g&s'
                        alt='img'
                        className='w-full h-40 object-cover'
                    />
                    <CardContent className='p-4'>
                        <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>hjghf</h2>
                        <p className='text-sm text-gray-600 mt-2'>great food</p>
                        <h3 className='text-lg font-semibold mt-4'>Price : <span className='text-blue-700'>Rs 50</span></h3>
                    </CardContent>

                    <CardFooter className='p-4'>
                        <Button onClick={()=>navigate("/cart")} className='w-full bg-blue-700 hover:bg-blue-600'>Add</Button>
                    </CardFooter>

                </Card>

            </div>

        </div>
    )
}

export default AvailableMenu