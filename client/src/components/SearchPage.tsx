import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FilterPage from './FilterPage'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { X } from 'lucide-react'



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
                            <div>
                                {
                                    ["bread", "corn","mongo d"].map((selectedFilter: string, idx: number) => (
                                        <div key={idx} className='relative inline-flex items-center max-w-full'>
                                            <Badge variant={"outline"}
                                                className='text-gray-700 rounded-md hover:cursor-pointer mr-1 whitespace-nowrap pr-5'>
                                                {selectedFilter}
                                            </Badge>

                                            <X size={16} className='absolute right-1 text-red-700 hover:cursor-pointer'/>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>


                    {/*  */}

                </div>

            </div>

        </div>
    )
}

export default SearchPage