import React from 'react';
import SideMenu from '../../components/Menu/SideMenu';
import { CheckIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Idp = () => {
  return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-screen my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>IDP PLAN</h2>
                        <p className='text-2xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" />
                            <div className='flex justify-between flex-wrap px-4'>
                                <Link to="/Economicimpact">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        Economic Impact
                                    </button>
                                </Link>
                                <Link to="/Projectperformance">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        Project Performance
                                    </button>
                                </Link>
                                <Link to="/Standardreporting">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        Standard Reporting
                                    </button>
                                </Link>
                            </div>
                            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Project Preparation And Maturity</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Prioritisation - Link</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Budget Sourcing - NT, Grant, Allocations, Loans and Reservies</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Baseline Assessment - Ward Reporting, Standard Reporting, Economic Impect</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>Expenditure - Project Performance</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </>
  )
}

export default Idp
