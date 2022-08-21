import React from 'react'
import { CheckIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const File01 = () => {
  return (
    <>
        <div className='w-full my-10'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>Budget</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>funds</p>
            
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                <div className='flex space-x-2'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Government</h3>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Provincial grants</h3>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Municipality grants</h3>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Loan</h3>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Reserves</h3>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Self generating</h3>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Public donations</h3>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Facilities lease</h3>
                    </div>
                </div>
                </div>
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] 
                    mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinx-200
                    borderborder-slate-300 rounded-xl text-center shadow-xl'
                >
                <div className='flex justify-between flex-wrap px-4'>
                    <Link to="/Findbudget">
                        <p className='flex px-4 py-2 text-slate-500'>Find Budget</p>
                    </Link>
                    <Link to="/Mscoa">
                        <p className='flex px-4 py-2 text-slate-500'>MSCOA</p>
                    </Link>
                    <Link to="/Prioritisation">
                        <p className='flex px-4 py-2 text-slate-500'>PRIORITISATION</p>
                    </Link>
                    <Link to="/Prioritisation2">
                        <p className='flex px-4 py-2 text-slate-500'>PRIORITISATION 2</p>
                    </Link>
                    <Link to="/Sourcesfunding">
                        <p className='flex px-4 py-2 text-slate-500'>SOURCES FUNDING</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default File01
