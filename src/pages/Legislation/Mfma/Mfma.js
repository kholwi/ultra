import React from 'react';
import SideMenu from '../../../components/Menu/SideMenu';

const Mfma = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-screen my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>MFMA</h2>
                        <p className='text-4xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" /><hr className="my-2 text-gray-600" />
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <a href="https://www.gov.za/sites/default/files/gcis_document/201409/a56-03.pdf" rel="noreferrer" target="_blank">
                            <span>Download</span>
                        </a>
                        </button>
                        <div className='flex justify-between flex-wrap px-4'>
                        <p class="text-base font-bold ...">Municipal Finance Management Act 56 of 2003</p>
                            <section>
                                    <h3>The Local Government: Municipal Finance Management Act 56 of 2003 intends:</h3>

                                    <li>to secure sound and sustainable management of the financial affairs of municipalities and other institutions in the local sphere of government;</li>
                                    <li>to establish treasury norms and standards for the local sphere of government; and</li>
                                    <li>to provide for matters connected therewith.</li>
                            </section>
                            <section>
                                <h3>Amends</h3>
                                <p>Promotion of Local Government Affairs Act 91 of 1983</p>
                            </section>
                            <section>
                                <h3>Commencement</h3>
                                <li>1 July 2004, excluding Sections 62(1)(f)(iv), 71, 110 to 116 and 120; 9, 38, 29, 40, 41 and 42; 5(3), (4) and (8), 28, 34 (3), 73, 91, 123, 126 to 134, Chapter 13 and Section 179; Sections 83, 107 and 119; Section 45(4)(a) (Gazette 26510 of 25 Jun 2004)</li>
                                <li>1 December 2004, Sections 62(1)(f)(iv), 71, 110 to 116 and 120 (Gazette 26510 of 25 Jun 2004)</li>
                                <li>1 Apr 2005, Sections 9, 38, 29, 40, 41 and 42 (Gazette 26510 of 25 Jun 2004)</li>
                                <li>1 Jul 2005, Sections  5(3), (4) and (8), 28, 34 (3), 73, 91, 123, 126 to 134, Chapter 13 and Section 179 (Gazette 26510 of 25 Jun 2004)</li>
                                <li>1 Jul 2006, Sections  83, 107 and 11 (Gazette 26510 of 25 Jun 2004)</li>
                                <li>1 Jul 2008, Section 45 (4)(a) (Gazette 26510 of 25 Jun 2004)</li>
                            </section>
                            <section>
                                <p>Amendments: Amended by Municipal Fiscal Powers and Functions Act 12 of 2007</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mfma
