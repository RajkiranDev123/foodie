import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RestaurantFormSchema, restaurantFromSchema } from '@/schema/restaurantSchema'
import { useRestaurantStore } from '@/store/useRestaurantStore'
import { Loader2 } from 'lucide-react'
import React, { JSX, useEffect, useState } from 'react'


type Props = {}
const Restaurant: React.FC<Props> = (): JSX.Element => {

    const [input, setInput] = useState<RestaurantFormSchema>({
        restaurantName: "",
        city: "",
        country: "",
        deliveryTime: 0,
        cuisines: [],
        imageFile: undefined
    })
    const [errors, setErrors] = useState<Partial<RestaurantFormSchema>>({});
    const { loading, restaurant, updateRestaurant, createRestaurant, getRestaurant } = useRestaurantStore();

    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target
        setInput({ ...input, [name]: type === "number" ? Number(value) : value });
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const result = restaurantFromSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<RestaurantFormSchema>);
            return;
        }
        try {
            const formData = new FormData();
            formData.append("restaurantName", input.restaurantName);
            formData.append("city", input.city);
            formData.append("country", input.country);
            formData.append("deliveryTime", input.deliveryTime.toString());
            formData.append("cuisines", JSON.stringify(input.cuisines));

            if (input.imageFile) {
                formData.append("imageFile", input.imageFile);
            }

            if (restaurant) {
                // update
                await updateRestaurant(formData);
            } else {
                // create
                await createRestaurant(formData);
            }
        } catch (error) {
            console.log(error);
        }

    }

    // 

    useEffect(() => {
        const fetchRestaurant = async () => {
            await getRestaurant();
            if (restaurant) {
                setInput({
                    restaurantName: restaurant.restaurantName || "",
                    city: restaurant.city || "",
                    country: restaurant.country || "",
                    deliveryTime: restaurant.deliveryTime || 0,
                    cuisines: restaurant.cuisines
                        ? restaurant.cuisines.map((cuisine: string) => cuisine)
                        : [],
                    imageFile: undefined,
                });
            };
        }
        fetchRestaurant();
        console.log(restaurant);

    }, []);

    // 

    return (
        <div className='max-w-6xl mx-auto my-10'>
            {/* <div> */}
            {/* <div> */}
            <h1 className='font-extrabold text-2xl mb-5 text-gray-700'>Add Restaurant</h1>

            <form onSubmit={submitHandler}>

                <div className='md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0'>

                    <div className='space-y-1'>
                        <Label>Restaurant Name</Label>
                        <Input value={input.restaurantName} onChange={changeEventHandler} type="text" name='restaurantName'
                            placeholder='Restaurant Name' />
                        {errors && (
                            <span className="text-xs text-red-600 font-medium">
                                {errors.restaurantName}
                            </span>
                        )}
                    </div>

                    <div className='space-y-1'>
                        <Label>City</Label>
                        <Input value={input.city} onChange={changeEventHandler} type="text" name='city' placeholder='city' />
                        {errors && (
                            <span className="text-xs text-red-600 font-medium">
                                {errors.city}
                            </span>
                        )}
                    </div>

                    <div className='space-y-1'>
                        <Label>Country</Label>
                        <Input value={input.country} onChange={changeEventHandler} type="text" name='country' placeholder='country' />
                        {errors && (
                            <span className="text-xs text-red-600 font-medium">
                                {errors.country}
                            </span>
                        )}
                    </div>

                    <div className='space-y-1'>
                        <Label>Delivery Time</Label>
                        <Input value={input.deliveryTime} onChange={changeEventHandler} type="number" name='deliveryTime'
                            placeholder='Delivery Time' />
                        {errors && (
                            <span className="text-xs text-red-600 font-medium">
                                {errors.deliveryTime}
                            </span>
                        )}
                    </div>

                    <div className='space-y-1'>
                        <Label>Cusines</Label>
                        <Input value={input.cuisines}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput({ ...input, cuisines: e.target.value?.split(",") })}
                            type="text" name='cuisines' placeholder='e.g. momo,briyani' />
                        {errors && (
                            <span className="text-xs text-red-600 font-medium">
                                {errors.cuisines}
                            </span>
                        )}
                    </div>

                    <div className='space-y-1'>
                        <Label>Upload Restaurant Banner</Label>
                        <Input onChange={(e) =>
                            setInput({
                                ...input,
                                imageFile: e.target.files?.[0] || undefined,
                            })
                        }
                            type="file" accept='image/*' name='imageFile' />
                        {errors && (
                            <span className="text-xs text-red-600 font-medium">
                                {errors.imageFile?.name}
                            </span>
                        )}
                    </div>

                </div>

                {/* buttons */}
                <div className='my-5 w-full'>
                    {
                        loading ? (<Button disabled className='bg-blue-700 hover:bg-blue-600'>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> wait...
                        </Button>
                        ) : <Button className='bg-blue-700 hover:bg-blue-600'>
                            {restaurant ? "Update" : "Add Restaurant"}
                        </Button>
                    }
                </div>
                {/* buttons */}

            </form>

            {/* </div> */}
            {/* </div> */}

        </div>
    )
}

export default Restaurant