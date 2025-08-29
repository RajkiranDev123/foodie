import React from 'react'
import chow from "@/assets/chow.png"
import { IndianRupee, SeparatorHorizontal } from 'lucide-react'
import { Separator } from '@radix-ui/react-menubar'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
type Props = {}

const Success = (props: Props) => {
    const orders = [2]
    if (orders.length === 0) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <h1 className='font-bold text-2xl text-gray-600 dark:text-gray-300'>Order not found!</h1>
            </div>
        )
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-red-50 dark:gray-900 px-4'>
            <div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
                        Order Status : {" "}
                        <span className='text-green-900'>{"confirm".toUpperCase()}</span>
                    </h1>
                </div>

                <div className='mb-6'>
                    <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-300'>Order Summary</h2>

                    <div className='mb-4'>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img className='w-14 h-14 rounded-md object-cover' src={chow} alt='' />
                                <h3 className='ml-4 text-gray-800 dark:text-gray-200 font-medium'>Pizza</h3>
                            </div>

                            <div className='text-right'>
                                <div className='text-gray-800 dark:text-gray-200 flex items-center'>
                                    <IndianRupee />
                                    <span className='text-lg font-medium'>222</span>
                                </div>
                            </div>

                        </div>




                    </div>

                </div>
                <Link to="/cart">
                    <Button>Continue Shopping</Button>
                </Link>

            </div>
        </div>
    )
}

export default Success