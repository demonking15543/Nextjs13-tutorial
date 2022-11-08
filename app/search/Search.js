'use client';

import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter();

    const handleSearch = async (e) => {
        e.preventDefault();
        router.push(`search/${search}`);
    };
  return (
    <form onSubmit={handleSearch}>
        <input type="text" 
        value={search}
        placeholder="Please Enter your search here..."
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit' className='bg-blue-500 text-white font-bold py-2  px-5 rounded-lg'>Search</button>

    </form>
  )
}

export default Search