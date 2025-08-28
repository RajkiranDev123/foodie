import React, { SetStateAction } from 'react'
import { Dialog, DialogContent, DialogTitle } from './ui/dialog'

type Props = {}

const CheckOutConfirmPage = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>

        <DialogContent>
          <DialogTitle>Review your order</DialogTitle>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default CheckOutConfirmPage