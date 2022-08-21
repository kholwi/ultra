import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from '../../../components/Menu/SideMenu';

const Sourcesfunding = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-screen my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>Source Funding</h2>
                        <p className='text-2xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" />
                    <div className='flex justify-between flex-wrap px-4'>
                        <Link to="">
                            <p className='flex px-4 py-2 text-slate-500'>Facilities Lease</p>
                        </Link>
                        <Link to="">
                            <p className='flex px-4 py-2 text-slate-500'>Goverment</p>
                        </Link>
                        <Link to="">
                            <p className='flex px-4 py-2 text-slate-500'>Loans</p>
                        </Link>
                        <Link to="">
                            <p className='flex px-4 py-2 text-slate-500'>Municipality Grunts</p>
                        </Link>
                        <Link to="">
                            <p className='flex px-4 py-2 text-slate-500'>Provincial Grants</p>
                        </Link>
                        <Link to="">
                            <p className='flex px-4 py-2 text-slate-500'>Public Donations</p>
                        </Link>
                        <Link to="">
                            <p className='flex px-4 py-2 text-slate-500'>Reserves</p>
                        </Link>
                        <Link to="">
                            <p className='flex px-4 py-2 text-slate-500'>Self Generating</p>
                        </Link>
                    </div>
                </div>
                    </div>
                </div>
        </>
    )
}

export default Sourcesfunding
