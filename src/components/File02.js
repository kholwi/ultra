import React from 'react';
import { ArrowCircleDownIcon, FolderIcon } from '@heroicons/react/outline';

const File02 = () => {
    return (
        <div className='w-full h-screen mt-24'>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <FolderIcon className='w-16 p-4 bg-yellow-700 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p>add information here</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-yellow-700'>Click Here <ArrowCircleDownIcon className='w-5 ml-2' /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default File02;
