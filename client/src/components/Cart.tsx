import React, { useState } from 'react'
import { Button } from './ui/button'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './ui/table'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Minus, Plus } from 'lucide-react'
import CheckOutConfirmPage from './CheckOutConfirmPage'

type Props = {}

const Cart = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className='flex flex-col max-w-7xl mx-auto my-10'>

      <div className='flex justify-end'>
        <Button variant="link">Clear</Button>
      </div>

      <Table>

        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className='text-right'>Remove</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage src='' alt='h' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>

            <TableCell>briyani</TableCell>
            <TableCell>Rs 500</TableCell>
            <TableCell>
              <div className='w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md'>
                <Button variant={"outline"} size={"icon"} className='rounded-full bg-gray-200'><Minus /></Button>
                <Button variant={"outline"} size={"icon"} className='font-bold' disabled>1</Button>
                <Button variant={"outline"} size={"icon"} className='rounded-full bg-gray-200'><Plus /></Button>
              </div>
            </TableCell>

            <TableCell>80</TableCell>
            <TableCell className='text-right'>
              <Button size={"sm"} className='bg-red-700 hover:bg-red-600 '>R</Button>
            </TableCell>

          </TableRow>


        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className='text-2xl font-bold' colSpan={5}>
              Total
            </TableCell>
            <TableCell className='text-right text-2xl font-bold'>
              80
            </TableCell>
          </TableRow>
        </TableFooter>

      </Table>

      <div className='flex justify-end my-5'>
        <Button onClick={() => setOpen(true)} className='bg-green-700 hover:bg-green-600'>Checkout!</Button>
      </div>

      <CheckOutConfirmPage open={open} setOpen={setOpen} />

    </div>
  )
}

export default Cart