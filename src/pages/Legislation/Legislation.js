import React from 'react';
import SideMenu from '../../components/Menu/SideMenu';
import { Link } from 'react-router-dom';

const Legislation = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-screen my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>Legislation</h2>
                        <p className='text-2xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" />
                            <div className='flex justify-between flex-wrap px-4'>
                                <Link to="/Cosa">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        COSA
                                    </button>
                                </Link>
                                <Link to="/Pfma">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        PFMA
                                    </button>
                                </Link>
                                <Link to="/Mfma">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        MFMA
                                    </button>
                                </Link>
                                <Link to="/Msa">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        MSA
                                    </button>
                                </Link>
                                <Link to="/Dora">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        DORA
                                    </button>
                                </Link>
                                <Link to="/Spluma">
                                    <button class="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                                        SPLUMA
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Legislation
