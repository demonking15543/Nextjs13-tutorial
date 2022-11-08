import React from 'react'

const Search = async (searchTerm) => {
    const res  = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    )
    // throw new Error("WOOPS something went wrong...")
    const data = await res.json();
    return data;

}
async function SearchResults({params: {searchTerm}}) {
    const searchResults= await Search(searchTerm);

  return (
    <div >
        <p className='text-gray-500 text-sm'>Search results for: {searchTerm}</p>
    <ol className='space-y-5 p-5'>
{
    searchResults?.organic_results?.map((result)=> (
        <li className='list-decimal'  key={result.position}>
<p className='font-bold'>{result.title}</p>
<p>{result.snippet}</p>
        </li>
    ))
}
    </ol>
    </div>
  )
}

export default SearchResults;