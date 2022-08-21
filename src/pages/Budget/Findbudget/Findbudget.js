import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import SideMenu from '../../../components/Menu/SideMenu';

const Findbudget = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-screen my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>Find Budget</h2>
                        <p className='text-2xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" />
                        <div className='w-full my-10'>
                            <div className='max-w-[1240px] mx-auto px-2'>
                                <p className='text-2xl py-8 text-gray-500 text-center'>Budget Locator</p>
                            
                            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                                <div className='flex space-x-2'>
                                    <div>
                                        <CheckIcon className='w-7 mr-4 text-green-600' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg'>The System model to lacate appropriate Budget</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <CheckIcon className='w-7 mr-4 text-green-600' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg'>The System to negotiate and mitigate budget</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <CheckIcon className='w-7 mr-4 text-green-600' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg'>The System locator to apprciate bugdet and suggest back ups</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <CheckIcon className='w-7 mr-4 text-green-600' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg'>The System locator to manage and balance priotise</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <CheckIcon className='w-7 mr-4 text-green-600' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg'>The System locator to provide variable budgeting</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <CheckIcon className='w-7 mr-4 text-green-600' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg'>The Ssytem locator must be user friendly and transparent</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <CheckIcon className='w-7 mr-4 text-green-600' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg'>The System locator to project life span of the project</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Findbudget
