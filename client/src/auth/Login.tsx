import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import { LockKeyhole, Mail, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [loading, setLoading] = useState(false)

    return (
        <div className='min-h-screen flex justify-center items-center'>
            {/* w x h , md: w>=768 , max-w-md : content will shrink below 768px */}
            <form className='md:p-5 w-full max-w-md md:border border-gray-200 rounded-lg mx-4'>
                <div className='mb-4'>
                    <h1 className='font-bold text-2xl text-gray-700 '>Foodie Spot!</h1>
                </div>
                <div className='relative mb-4'>
                    {/* <Label>Email</Label> */}
                    <Input
                        className='pl-8 focus-visible:ring-1'
                        type='email'
                        placeholder='Email'
                    />
                    <Mail className='absolute inset-y-2 left-2 text-gray-500 pointer-events-none' />
                </div>

                <div className='relative'>
                    {/* <Label>Password</Label> */}
                    <Input
                        className='pl-8 focus-visible:ring-1'
                        type='password'
                        placeholder='Password'
                    />
                    <LockKeyhole className='absolute inset-y-2 left-2 text-gray-500 pointer-events-none' />
                </div>

                <Button className='mt-4 w-full bg-blue-700 cursor-pointer hover:bg-blue-600 '>
                    {loading ? <Loader2 className='animate-spin' /> : "Login"}
                </Button>

                <p className='mt-1'>
                    Don't have an account?
                    <Link className='text-blue-700 ml-1' to="/signup">Register</Link>
                </p>




            </form>

        </div>
    )
}

export default Login