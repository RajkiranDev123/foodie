import React, { SetStateAction, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'


type Props = {}

const CheckOutConfirmPage = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: ""
  })
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const checkoutHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(input)
  }
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>

        <DialogContent>
          <DialogTitle>Review your order</DialogTitle>
          <DialogDescription className='text-xs'>
            poiuyty iuytf kugh
          </DialogDescription>
          {/*  */}
          <form onSubmit={checkoutHandler} className='md:grid grid-cols-2 gap-2 space-y-2 md:space-y-0'>

            <div>
              <Label>Fullname</Label>
              <Input type='text' name='name' value={input.name} onChange={changeEventHandler} />
            </div>


            <div>
              <Label>Email</Label>
              <Input type='email' name='email' value={input.email} onChange={changeEventHandler} />
            </div>


            <div>
              <Label>Contact</Label>
              <Input type='text' name='contact' value={input.contact} onChange={changeEventHandler} />
            </div>


            <div>
              <Label>Address</Label>
              <Input type='text' name='address' value={input.address} onChange={changeEventHandler} />
            </div>


            <div>
              <Label>City</Label>
              <Input type='text' name='city' value={input.city} onChange={changeEventHandler} />
            </div>


            <div>
              <Label>Fullname</Label>
              <Input type='text' name='country' value={input.country} onChange={changeEventHandler} />
            </div>

            <DialogFooter className='col-span-2 pt-5'>
              <Button className='bg-blue-700 hover:bg-blue-600'>Continue to Payment</Button>
            </DialogFooter>

          </form>
        </DialogContent>



      </Dialog>
    </div>
  )
}

export default CheckOutConfirmPage