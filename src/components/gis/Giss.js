import React from 'react';
import SideMenu from '../Menu/SideMenu';

const Giss = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-full my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>GIS</h2>
                        <p className='text-2xl py-8 text-gray-500 text-center'>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Giss
