import React  from 'react';
import SideMenu from '../../components/Menu/SideMenu';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/outline';
import Listcouncillor from './Listcouncillor/Listcouncillor';

const Councillor = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-full my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>Councillor</h2>
                        <p className='text-4xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" />
                    <div className='grid text-2xl gap-4 py-8 text-gray-500 text-center pt-4'>
                        <Link to="/createcouncillor">
                            <div className='flex space-x-2'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Create</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/listcouncillor">
                            <div className='flex space-x-2'>
                                <div>
                                    <CheckIcon className='w-7 mr-4 text-green-600' />
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>List</h3>
                                </div>
                            </div>
                        </Link>
                        <Listcouncillor />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Councillor
