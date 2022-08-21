import React  from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import SideMenu from '../../../components/Menu/SideMenu';

const Mscoa = () => {
    return (
        <>
        <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-screen my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>MSCOA</h2>
                        <p className='text-2xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" />
            
                        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                            <div className='flex space-x-2'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>It must coloborate and intergrate the budget and the Idp</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>It must create a standasation</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>It must creat classifications</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>It must analysises the budget and IDP</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Actionable projects</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>The System locator must be user friendly and transparent</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Instracture Priorities</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Capital and Operational Expanditure</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Approved budget of the IDP</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Geographical area beneficiaries indication</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>It must facilitate efficient tracking</p>
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
                                <p className='flex px-4 py-2 text-slate-500'>Costing</p>
                            </Link>
                            <Link to="/Mscoa">
                                <p className='flex px-4 py-2 text-slate-500'>Function</p>
                            </Link>
                            <Link to="/Idp">
                                <p className='flex px-4 py-2 text-slate-500'>IDP</p>
                            </Link>
                            <Link to="/Sourcesfunding">
                                <p className='flex px-4 py-2 text-slate-500'>Indictor</p>
                            </Link>
                            <Link to="/Sourcesfunding">
                                <p className='flex px-4 py-2 text-slate-500'>Item</p>
                            </Link>
                            <Link to="/Sourcesfunding">
                                <p className='flex px-4 py-2 text-slate-500'>MSC</p>
                            </Link>
                            <Link to="/Projects">
                                <p className='flex px-4 py-2 text-slate-500'>Projects</p>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Mscoa
