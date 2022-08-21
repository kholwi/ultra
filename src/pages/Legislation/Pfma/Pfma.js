import React from 'react';
import SideMenu from '../../../components/Menu/SideMenu';

const Pfma = () => {
    return (
        <>
            <div className="flex w-screen h-screen" >
                <SideMenu />
                <div className='w-screen my-10'>
                    <div className='max-w-[1240px] mx-auto px-2'>
                        <h2 className='text-5xl font-bold text-center'>PFMA</h2>
                        <p className='text-4xl py-8 text-gray-500 text-center'>. . .</p>
                        <hr className="my-2 text-gray-600" />
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Download</span>
                        </button>
                        <div className='flex justify-between flex-wrap px-4'>
                            <section>
                                <h3>The Public Finance Management Act 1 of 1999 intends:</h3>
                                <li>to regulate financial management in the national government;</li>
                                <li>to ensure that all revenue, expenditure, assets and liabilities of that government are managed efficiently and effectively;</li>
                                <li>to provide for the responsibilities of persons entrusted with financial management in that government; and</li>
                                <li>to provide for matters connected therewith.</li>
                            </section>
                            <section>
                                <h3>Amends</h3>
                                <li>Exchequer Act (previous short title: Exchequer and Audit Act) 66 of 1975</li>
                                <li>Railways and Harbours Acts Amendment Act 67 of 1980</li>
                                <li>Railways and Harbours Acts Amendment Act 29 of 1981</li>
                                <li>Legal Succession to the South African Transport Services Act 9 of 1989</li>
                                <li>Finance Act 120 of 1991</li>
                                <li>Finance Act 41 of 1994</li>
                            </section>
                            <section>
                                <h3>Commencement</h3>
                                <li>1 April 2000 except Chapter 11 and Section 93(4)</li>
                                <li>2 March 1999, Chapter 11 and Section 93(4) and those provisions 
                                determined by the Minister by notice in the Government Gazette, which will take effect on a date determined by the notice, but which may not be a date later than 1 April 2003</li>
                                <li>1 April 2001, Sections 13(2), 22(2), 52, 66(3), 66(7)(b) and 70(1)(b) (Gazette 21053 of 31 March 2000)</li>
                                <li>31 August 2001, proviso to Sections 15(1)(a)(ii), 18(2) (a), 27(3)(e) and 38(2) (Gazette 21053 of 31 March 2000)</li>
                                <li>1 August 2002, Sections 27(4) (Gazette 21053 of 31 March 2000)</li>
                                <li>1 April 2003, Sections 8 and 19 (Gazette 21053 of 31 March 2000)</li>
                            </section>
                            <section>
                                <h3>Amendments</h3>
                                <li>Amended by Financial Management of Parliament Amendment Act 34 of 2014</li>
                                <li>Amended by Financial Management of Parliament Act 10 of 2009</li>
                                <li>Amended by South African Express Act 34 of 2007</li>
                                <li>Amended by Broadband Infraco Act 33 of 2007</li>
                                <li>Amended by Public Service Amendment Act 30 of 2007</li>
                                <li>Amended by South African Airways Act 5 of 2007</li>
                                <li>Amended by Public Audit Act</li>
                                <li>Amended by Judicial Officers (Amendment of Conditions of Service) Amendment Act 28 of 2003</li>
                                <li>Amended by Local Government: Municipal Systems Amendment Act 32 of 2000</li>
                                <li>Amended by Public Finance Management Amendment Act 29 of 1999</li>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pfma
