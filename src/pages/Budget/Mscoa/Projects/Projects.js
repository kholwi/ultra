import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from '../../../../components/Menu/SideMenu';

const Projects = () => {
    return (
        <>
        <div className="flex w-screen h-screen" >
            <SideMenu />
            <div className='w-screen my-10'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <h2 className='text-5xl font-bold text-center'>Projects</h2>
                    <p className='text-2xl py-8 text-gray-500 text-center'>. . .</p>
                    <hr className="my-2 text-gray-600" />
                <div className='flex justify-between flex-wrap px-4'>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>Housing</p>
                    </Link>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>Transport</p>
                    </Link>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>Water</p>
                    </Link>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>Safety</p>
                    </Link>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>Health Care</p>
                    </Link>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>Sanitation</p>
                    </Link>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>Electricity</p>
                    </Link>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>Waste Management</p>
                    </Link>
                    <Link to="">
                        <p className='flex px-4 py-2 text-slate-500'>other</p>
                    </Link>
                </div>
            </div>
                </div>
            </div>
    </>
    )
}

export default Projects
