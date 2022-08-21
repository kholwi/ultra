import React from 'react';
import SideMenu from '../../../components/Menu/SideMenu';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/outline';
import Listreporting from './listreporting/Listreporting';

const Standardreporting = () => {
    return (
        <>
        <div className="flex w-screen h-screen" >
            <SideMenu />
            <div className='w-screen my-10'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <h2 className='text-5xl font-bold text-center'>Standard Reporting</h2>
                    <p className='text-2xl py-8 text-gray-500 text-center'>. . .</p>
                    <hr className="my-2 text-gray-600" />
                    <div className='grid text-2xl gap-4 py-8 text-gray-500 text-center pt-4'>
                        <Link to="/createreporting">
                            <div className='flex space-x-2'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Create</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/listreporting">
                            <div className='flex space-x-2'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>List</h3>
                                </div>
                            </div>
                        </Link>
                        <Listreporting />
                    </div>

                    </div>
                    </div>
                </div>
        </>
    )
}

export default Standardreporting
