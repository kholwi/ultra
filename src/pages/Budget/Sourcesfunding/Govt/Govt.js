import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/outline';
import List from './list/List';

const Govt = () => {
    return (
        <div className='w-full my-9'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>Govenment</h2>
                <div className='grid text-2xl gap-4 py-8 text-gray-500 text-center pt-4'>
                    <Link to="/create">
                        <div className='flex space-x-2'>
                            <div>
                                <CheckIcon className='w-7 mr-4 text-green-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Create</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/list">
                        <div className='flex space-x-2'>
                            <div>
                                <CheckIcon className='w-7 mr-4 text-green-600' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>List</h3>
                            </div>
                        </div>
                    </Link>
                    <List />
                </div>
            </div>
        </div>
               
    )
}

export default Govt
