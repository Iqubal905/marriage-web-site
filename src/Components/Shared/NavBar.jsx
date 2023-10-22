import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 520) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = ` navbar z-10  max-w-screen-xl  bg-slate-800  text-pink-500 shadow-lg ${isFixed ? 'fixed top-0 left-6 right-0  bg-opacity-50' : 'bg-opacity-100'}`;

  return (
    <div className='flex justify-center '>
            {/* <div className=" navbar  z-10 bg-opacity-0 max-w-screen-xl  bg-slate-400  text-pink-500"> */}
            <div className={navbarClasses}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
      
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">ForeverAndEverUnion</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-bold">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
  )
}

export default NavBar