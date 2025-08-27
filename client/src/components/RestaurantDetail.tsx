import React from 'react'
import AvailableMenu from './AvailableMenu'
import { Badge } from './ui/badge'
import { Timer } from 'lucide-react'


type Props = {}

const RestaurantDetail = (props: Props) => {
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='w-full'>
                <div className='relative w-full h-32 md:h-64 lg:h-72'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4mFh0k1RhIJQB_SwZD5AedrZcb430mzV5g&s'
                        alt='img' className='object-cover w-full h-full rounded-lg shadow-lg' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='my-5'>
                    <h1 className='font-medium text-xl '>Bengali hotel</h1>
                    <div className='flex gap-2 my-2'>
                        {
                            ["one", "two"].map((cusine: string, idx: number) => (
                                <Badge key={idx}>{cusine}</Badge>
                            ))
                        }
                    </div>
                    <div className='flex md:flex-row flex-col gap-2 my-5'>
                        <div className='flex items-center gap-2'>
                            <Timer className='w-5 h-5' />
                            <h1 className='flex items-center gap-2 font-medium'>Delivery Time : {" "}
                                <span className='text-gray-600'>
                                    35 mins
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
            <AvailableMenu />

        </div>
    )
}

export default RestaurantDetail