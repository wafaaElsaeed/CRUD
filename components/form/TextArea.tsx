import React from 'react'

export default function TextArea({ label, placeholder, required, name, register, error }) {
    return (
        <div className='flex flex-col'>
            <label className='text-xs font-medium capitalize mb-2' htmlFor={name} >{label}</label>
            <textarea id={name} {...register} name={name} placeholder={placeholder} className='border rounded border-[#ced4da] p-2 outline-none focus:border-blue-500 h-[100px] placeholder:text-[#D0D6DF]' required={required} />
            <span className='text-sm text-red-500'>{error}</span>
        </div>
    )
}
