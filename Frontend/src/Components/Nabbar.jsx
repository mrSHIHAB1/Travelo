import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

import { Tooltip } from 'react-tooltip'
const Nabbar = () => {
     const { logout, user } = useContext(AuthContext);
    return (
        <div className="">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/alltsp'>All Tourist Spot</NavLink></li>
                        <li><NavLink to='/addtsp'>Add Tourist Spot</NavLink></li>
                        <li><NavLink to='/mylistpage'>My List</NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Travelo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/alltsp'>All Tourist Spot</NavLink></li>
                        <li><NavLink to='/addtsp'>Add Tourist Spot</NavLink></li>
                        <li><NavLink to='/mylistpage'>My List</NavLink></li>

                    </ul>
                </div>
                 <div className="navbar-end">

                    {
                        user ? <div className="dropdown dropdown-end z-30">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <a data-tooltip-id="my-tooltip" data-tooltip-content="Your Profile"> <img src={user?.photoURL || "https://i.postimg.cc/fWY6vtGy/Screenshot-541.png"} /></a>
                                <Tooltip id="my-tooltip" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/loginn'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div> 
            </div>
        </div>
    );
};

export default Nabbar;