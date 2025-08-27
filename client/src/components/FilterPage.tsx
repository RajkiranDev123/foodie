import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"


export type FilterOptionsType = {
  id: string, label: string
}

const filterOptions: FilterOptionsType[] = [
  { id: "burger", label: "Burger" },
  { id: "pizza", label: "Pizza" },

]

const FilterPage = () => {
  const appliedFilterhandler = (value: string) => { }
  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1>Filter by dish</h1>
        <Button variant={"link"}>Reset</Button>
      </div>

      {/*  */}
      {
        filterOptions?.map((option) => (
          <div key={option.id} className="flex items-center space-x-2 my-5">
            <Checkbox id={option.id} onClick={() => appliedFilterhandler(option.label)} />
            <Label className="text-gray-600">{option.label}</Label>
          </div>
        ))
      }

      {/*  */}

    </div>
  )
}

export default FilterPage