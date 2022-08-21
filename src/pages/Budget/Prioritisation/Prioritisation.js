import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import SideMenu from '../../../components/Menu/SideMenu';

const Prioritisation = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                    <SideMenu />
                    <div className='w-screen my-10'>
                        <div className='max-w-[1240px] mx-auto px-2'>
                            <h2 className='text-5xl font-bold text-center'>Prioritisation</h2>
                            <p className='text-2xl py-8 text-gray-500 text-center'>. . .</p>
                            <hr className="my-2 text-gray-600" />
                                
                                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                                    <div className='flex space-x-2'>
                                        <div>
                                            <CheckIcon className='w-7 mr-4 text-green-600' />
                                        </div>
                                        <div>
                                            <p className='font-bold text-lg'>The Project Rediness</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div>
                                            <CheckIcon className='w-7 mr-4 text-green-600' />
                                        </div>
                                        <div>
                                            <p className='font-bold text-lg'>Technical Compliances</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div>
                                            <CheckIcon className='w-7 mr-4 text-green-600' />
                                        </div>
                                        <div>
                                            <p className='font-bold text-lg'>The Spatial Planning demands</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div>
                                            <CheckIcon className='w-7 mr-4 text-green-600' />
                                        </div>
                                        <div>
                                            <p className='font-bold text-lg'>The Financial availability and constrain</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div>
                                            <CheckIcon className='w-7 mr-4 text-green-600' />
                                        </div>
                                        <div>
                                            <p className='font-bold text-lg'>The Council check list</p>
                                        </div>
                                    </div>
                            </div>
                            </div>
                    </div>
            </div>
        </>
    )
}

export default Prioritisation
