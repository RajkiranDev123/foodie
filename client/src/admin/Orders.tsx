import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

type Props = {}

const Orders = (props: Props) => {
  return (
    <div className='max-w-6xl mx-auto my-10'>
      <h1 className='text-3xl font-extrabold text-gray-900 dark:text-white mb-10'>Orders</h1>

      <div className='space-y-2'>

        {/* display orders */}
        <div className='flex flex-col md:flex-row justify-center items-start sm:items-center
         bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700'>

          <div className='flex-1 mb-6 sm:mb-8'>
            <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>Lorem</h2>
            <p className='text-gray-600 dark:text-gray-400 mt-2'>
              <span className='font-semibold'>address : </span>
              iouytr
            </p>

            <p className='text-gray-600 dark:text-gray-400 mt-2'>
              <span className='font-semibold'>Total :</span>
              555
            </p>

          </div>

          <div className='w-full sm:w-1/3 '>
            <Label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Order Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Status"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {
                    ["Pending","Confirmed","Preparing","OutForDelivery","Delivered"].map((status:string,index:number)=>(
                      <SelectItem value={status.toLowerCase()} key={index}>{status}</SelectItem>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

        </div>
        {/*  */}


   {/* display orders */}
        <div className='flex flex-col md:flex-row justify-center items-start sm:items-center
         bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700'>

          <div className='flex-1 mb-6 sm:mb-8'>
            <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>Lorem</h2>
            <p className='text-gray-600 dark:text-gray-400 mt-2'>
              <span className='font-semibold'>address : </span>
              iouytr
            </p>

            <p className='text-gray-600 dark:text-gray-400 mt-2'>
              <span className='font-semibold'>Total :</span>
              555
            </p>

          </div>

          <div className='w-full sm:w-1/3 '>
            <Label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Order Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Status"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {
                    ["Pending","Confirmed","Preparing","OutForDelivery","Delivered"].map((status:string,index:number)=>(
                      <SelectItem value={status.toLowerCase()} key={index}>{status}</SelectItem>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

        </div>
        {/*  */}
 

      </div>
    </div>
  )
}

export default Orders