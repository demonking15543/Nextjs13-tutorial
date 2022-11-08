import React from 'react';
import Search from './Search';
function RootLayout({children}) {
  return (
    <main className='flex text-red space-x-4 divide-x-2 p-5'>
        <div>
          <h1>Search </h1>
        </div>
        <div className="flex-1 pl-5">
          <Search/>
          <div>{children}</div>
        </div>
    </main>
  )
}

export default RootLayout