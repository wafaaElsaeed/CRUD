import React from 'react'


export default function TextInput({label, placeholder ,name,type,register,error}) {
    return (
        <div className='flex flex-col'>
            {label&&<label className='text-xs font-medium capitalize mb-2' htmlFor={name}>{label}</label>}
                <input id={name} name={name} {...register} type={type} placeholder={placeholder} className='border rounded border-[#ced4da] p-2 outline-none focus:border-blue-500 placeholder:text-[#D0D6DF]'   />
                <span className='text-sm text-red-500'>{error}</span>
        </div>
    )
}
