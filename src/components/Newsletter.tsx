import React from 'react';

function Newsletter() {
    return (
        <div className='fixed top-0 left-0 right-0 m-auto max-w-sm border border-solid border-black font-sans p-5 rounded bg-white'>
            <div className='w-full flex justify-center items-center flex-col'>
                <h1 className='font-bold font-serif text-2xl'>Newsletter</h1>
                <form className='flex flex-col justify-start items-center gap-5 mt-5'>
                    <input type='email' placeholder='Enter your email' className='box-border p-2 border h-10 w-full border-gray-400'/>
                    <button type="submit" className='inline-block text-sm px-4 py-2 leading-none border rounded font-medium bg-red-500 text-white hover:text-white hover:bg-red-600 hover:underline mt-4 lg:mt-0'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;