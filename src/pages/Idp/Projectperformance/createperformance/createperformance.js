import React from 'react';
import SideMenu from '../../../../components/Menu/SideMenu';

const Createperformance = () => {
    return (
        <>
        <div className="flex w-screen h-screen" >
            <SideMenu />
            <div className='w-full my-9 space-x-2 max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>Economic Impact</h2>
                <div className='grid text-2xl gap-4 py-8 text-gray-500 pt-4'>
                        <form className='px-4 my-6 max-w-3xl mx-auto space-y-6'>
                            <h2 className='text-3xl font-semibold'>Create Economic Impact</h2>
                            <div className='flex space-x-4'>
                                <div className='w-1/2'>
                                    <label className='block mb-2 font-bold text-gray-500'>RFQ Number:</label>
                                    <input type="text" 
                                    className='w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-yellow-500' />
                                </div>
                                <div className='w-1/2'>
                                    <label className='block mb-2 font-bold text-gray-5'>Project Name:</label>
                                    <input type="text" 
                                    className='w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-yellow-500' />
                                </div>
                            </div>
                            <div>
                                <label className='block mb-2 font-bold text-gray-5'>Address:</label>
                                <input type="text" 
                                className='w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-yellow-500' />
                            </div>
                            <div className='flex space-x-4'>
                                <div className='w-1/2'>
                                    <label className='block mb-2 font-bold text-gray-5'>Date:</label>
                                    <input type="text"
                                    className='w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-yellow-500' />
                                </div>
                                <div className='w-1/2'>
                                    <label className='block mb-2 font-bold text-gray-5'>Due:</label>
                                    <input type="text"
                                    className='w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-yellow-500' />
                                </div>
                            </div>
                            <div>
                                <label className='block mb-2 font-bold text-gray-5'>Description:</label>
                                <input type="text"
                                className='w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-yellow-500' />
                            </div>
                            <div>
                                <label className='block mb-2 font-bold text-gray-5'>Budget:</label>
                                <input type="text"
                                className='w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-yellow-500' />
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" id="agree"/>
                                <label for="agree" className='ml-2 text-gray-700 text-sm'>Started?</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" id="agree"/>
                                <label for="agree" className='ml-2 text-gray-700 text-sm'>Middle?</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" id="agree" />
                                <label for="agree" className='ml-2 text-gray-700 text-sm'>To the end?</label>
                            </div>
                            <button 
                                className='block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300'
                            >
                                Submit
                            </button>
                        </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Createperformance
