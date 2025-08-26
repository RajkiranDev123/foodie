import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FilterPage from './FilterPage'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Globe, MapPin, X } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { AspectRatio } from './ui/aspect-ratio'

import chow from "@/assets/chow.png"

const SearchPage = () => {
    const params = useParams()
    const [searchQuery, setSearchQuery] = useState<string>("")
    return (
        <div className='max-w-7xl mx-auto my-10'>

            <div className='flex flex-col md:flex-row justify-between gap-10'>

                <FilterPage />

                {/* flex-1 : adjust width like if FilterPage is 30 then take 70 */}
                <div className='flex-1'>
                    <div className='flex items-center gap-2'>
                        <Input
                            placeholder='Search by restaurant and foods'
                            type='text'
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        />
                        <Button className='bg-blue-700 hover:bg-blue-600'>Search</Button>
                    </div>

                    {/* display items here... */}
                    <div>
                        <div className='flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3'>
                            <h1 className='text-gray-700'>(2) found!</h1>
                            <div className='flex flex-wrap mb-4 md:mb-0 gap-2'>
                                {
                                    ["bread", "corn", "mongo d"].map((selectedFilter: string, idx: number) => (
                                        <div key={idx} className='relative inline-flex items-center max-w-full'>
                                            <Badge variant={"outline"}
                                                className='text-gray-700 rounded-md hover:cursor-pointer  whitespace-nowrap pr-5'>
                                                {selectedFilter}
                                            </Badge>

                                            <X size={16} className='absolute right-1 text-red-700 hover:cursor-pointer' />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        {/* cards of restaurants */}
                        <div className='grid md:grid-cols-3 gap-4'>
                            <Card className='bg-white dark:bg-gray-800 shadow-xl rounded-xl 
                            overflow-hidden hover:shadow-2xl transition-shadow duration-300'>

                                <div className='relative'>
                                    <AspectRatio ratio={16 / 6}>
                                        <img src={chow} alt='h' className='w-full h-full object-cover' />
                                    </AspectRatio>
                                    <div className='absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-55 rounded-lg py-1 px-3'>
                                        <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>Feature</span>
                                    </div>
                                </div>

                                {/* card content */}
                                <CardContent>
                                    <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>Kfc</h1>
                                    <div className='mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400'>
                                        <MapPin size={16} />
                                        <p className='text-sm'>
                                            City : {" "}
                                            <span className='font-medium'>Delhi</span>
                                        </p>
                                    </div>

                                    <div className='mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400'>
                                        <Globe size={16} />
                                        <p className='text-sm'>
                                            Country : {" "}
                                            <span className='font-medium'>India</span>
                                        </p>
                                    </div>

                                    <div className='flex gap-2 mt-4 flex-wrap'>
                                       
                                    </div>
                                </CardContent>
                                {/*  */}
                            </Card>


                        </div>


                        {/*  */}



                    </div>


                    {/*  */}

                </div>

            </div>

        </div>
    )
}

export default SearchPage