import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    DatabaseIcon, 
    XIcon, 
    SearchIcon, 
    HomeIcon, 
    CollectionIcon, 
    CashIcon, 
    PuzzleIcon,
    LinkIcon,
    UserGroupIcon,
    AdjustmentsIcon,
    LogoutIcon,
    LocationMarkerIcon,
    ClipboardIcon
} from '@heroicons/react/outline';

const SideMenu = () => {
    const navigation = useNavigate()

    const logout = () => {
		localStorage.removeItem("user")
		navigation("/login")
    }

    return (
        <div>
            <div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto
                        text-center bg-gray-800 relative h-screen">
                <div className='text-gray-100 text-xl'>
                    <div className='p-2.5 mt-1 flex items-center'>
                        <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-yellow-700' /></p>
                        <h1 className='text-3xl font-bold text-gray-200 mr-4 sm:text-4xl'>ULTRA</h1>
                        <p className='flex px-4 py-2 text-slate-500'><XIcon className='h-6 text-yellow-700' /></p>
                    </div>
                    <hr className="my-2 text-gray-600" />
                </div>
                <div className='px-4 pt-2 flex items-center rounded-md duration-300
                    cursor-pointer bg-gray-700 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><SearchIcon className='h-6 text-yellow-700' /></p>
                    <input type="text" placeholder='Search' className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"></input>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><HomeIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/">
                        <span className='text-[15px] ml-4 text-gray-200'>Home</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><CollectionIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Dashboard">
                        <span className='text-[15px] ml-4 text-gray-200'>Dashboard</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><CashIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Budget">
                        <span className='text-[15px] ml-4 text-gray-200'>Budget</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><PuzzleIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Backlog">
                        <span className='text-[15px] ml-4 text-gray-200'>Backlog</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><LinkIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Projects">
                        <span className='text-[15px] ml-4 text-gray-200'>Projects</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><UserGroupIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Councillor">
                        <span className='text-[15px] ml-4 text-gray-200'>Councillor</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><UserGroupIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Idp">
                        <span className='text-[15px] ml-4 text-gray-200'>IDP</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><LocationMarkerIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Giss">
                        <span className='text-[15px] ml-4 text-gray-200'>GIS</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><LocationMarkerIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Gis">
                        <span className='text-[15px] ml-4 text-gray-200'>Location</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><ClipboardIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Legislation">
                        <span className='text-[15px] ml-4 text-gray-200'>Legislation</span>
                    </Link>
                </div>
                <hr className="my-2 text-gray-600" />
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><AdjustmentsIcon className='h-6 text-yellow-700' /></p>
                    <Link to="/Settings">
                        <span className='text-[15px] ml-4 text-gray-200'>Settings</span>
                    </Link>
                </div>
                <div className='pt-4 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-gray-500 text-white'>
                    <p className='flex px-4 py-2 text-slate-500'><LogoutIcon className='h-6 text-yellow-700' /></p>
                    <span className='text-[15px] ml-4 text-gray-200' onClick={logout}>Log-Out</span>
                </div>
                <hr className="my-2 text-gray-600" />
            </div>
        </div>
    )
}

export default SideMenu
