import React from 'react'
import { FaSearch } from 'react-icons/fa';


export default function Search({ search , setSearch ,setPage }) {

    function changeHandler(e:ChangeEvent) {
        setPage(1)
        setSearch(e.target.value);
    }

    return (
        <div className='w-60 border rounded-md'>
            <div className='p-2 bg-slate-200 flex items-center gap-2'>
                <FaSearch  color='gray'/>
                <input className='border-0 outline-none bg-inherit' type='text' onChange={changeHandler} value={search} placeholder='Search' />
            </div>
        </div>
    )
}
