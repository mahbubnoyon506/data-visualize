import React from 'react';
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="drawyer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className='flex justify-end  pr-10'>
                        <label htmlFor="drawyer" className="btn drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawyer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        <li><Link to='/'> Home </Link></li>
                        <li><Link to='/results'>All Data</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;