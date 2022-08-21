import React from 'react';
import SideMenu from '../../../components/Menu/SideMenu';

const Dora = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-screen my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>DORA</h2>
                        <p className='text-4xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" />
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        
                        <a href="https://www.gov.za/sites/default/files/gcis_document/202106/divisionofrevenueact9of2021.pdf" rel="noreferrer" target="_blank"><span>Download</span></a>
                        </button>
                        <div className='flex justify-between flex-wrap px-4'>
                            <p class="text-base font-bold ...">Division Of Revenue Act 9 of 2021</p>

                            <p>
                                Division of Revenue Act 9 of 2021 intends:

                                to provide for the equitable division of revenue raised nationally among the national, provincial and local spheres of government for the 2021/22 financial year;
                                to provide for matters connected therewith.
                                Commencement
                                28 June 2021
                            </p>

                            Amendments: Amended by Division of Revenue Amendment Act 17 of 2021
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dora
