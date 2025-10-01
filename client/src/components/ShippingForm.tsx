import { ShippingFormInputs, shippingFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form'

const ShippingForm = ({ setShippingForm }:{setShippingForm:(data:ShippingFormInputs)=>void}) => {
    const { register, handleSubmit, formState: {errors} } = useForm<ShippingFormInputs>({
        resolver:zodResolver(shippingFormSchema),
    });

    const router = useRouter()

    const handleShippingForm:SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data)
        router.push("/cart?step=3", {scroll: false})
    }
    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleShippingForm)}>
            {/* name */}
            <div className='flex flex-col gap-1'>
                <label htmlFor="name" className='text-xs text-gray-500 font-medium'>Name</label>
                <input type="text" id='name' placeholder='John Doe' {...register("name")} className='border-b border-gray-200 py-2 outline-none text-sm'/>
                {errors.name && (
                    <p className='text-xs text-red-500'>{errors.name.message}</p>
                )}
            </div>
            {/* email */}
            <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-xs text-gray-500 font-medium'>Email</label>
                <input type="email" id='email' placeholder='your@email.com' {...register("email")} className='border-b border-gray-200 py-2 outline-none text-sm'/>
                {errors.email && (
                    <p className='text-xs text-red-500'>{errors.email.message}</p>
                )}
            </div>
            {/* phone number */}
            <div className='flex flex-col gap-1'>
                <label htmlFor="phone" className='text-xs text-gray-500 font-medium'>Phone</label>
                <input type="text" id='phone' placeholder='000-000-0000' {...register("phone")} className='border-b border-gray-200 py-2 outline-none text-sm'/>
                {errors.phone && (
                    <p className='text-xs text-red-500'>{errors.phone.message}</p>
                )}
            </div>
            {/* address */}
            <div className='flex flex-col gap-1'>
                <label htmlFor="address" className='text-xs text-gray-500 font-medium'>Address</label>
                <input type="text" id='address' placeholder='123 Main St., Town' {...register("address")} className='border-b border-gray-200 py-2 outline-none text-sm'/>
                {errors.address && (
                    <p className='text-xs text-red-500'>{errors.address.message}</p>
                )}
            </div>
            {/* City */}
            <div className='flex flex-col gap-1'>
                <label htmlFor="city" className='text-xs text-gray-500 font-medium'>City</label>
                <input type="text" id='city' placeholder='Main City' {...register("city")} className='border-b border-gray-200 py-2 outline-none text-sm'/>
                {errors.city && (
                    <p className='text-xs text-red-500'>{errors.city.message}</p>
                )}
            </div>
            <button
                type='submit'
                className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
                >
                Continue
                <ArrowRight className="w-3 h-3"/>
            </button>
        </form>
    )
}

export default ShippingForm
