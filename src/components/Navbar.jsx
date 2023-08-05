import {Link} from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [mobile,setmobile]=useState(false);
    return (
        <div className='container-lg'>
            <nav className="navbar">
                <h2 className="logo">logo</h2>
                <ul className="hidden sm:flex">
                    <li><Link to="/home" className="navlink">Home</Link></li>
                    <li><Link to="/about" className="navlink">About</Link></li>
                    <li><Link to="/contact" className="navlink">Contact</Link></li>
                    <li><Link to="/services" className="navlink">Services</Link></li>
                </ul>
                <div className="sm:hidden inline-block">
                    <BiMenu onClick={()=>setmobile(true)} className='w-6 h-6'/>
                    
                </div>
                {mobile && 
                 <div className="fixed top-0 left-0 h-full w-full bg-white z-10">
                    <div className="navbar p-2">
                        <p className="logo">Logo</p>
                        <AiOutlineClose onClick={()=>setmobile(false)} className='w-6 h-6'/>
                    </div>
                    <ul className="mobile-nav sm:hidden">
                        <li><Link to="/" onClick={()=>setmobile(false)} className="mobile-navlink">home</Link></li>
                        <li><Link to="/about" onClick={()=>setmobile(false)} className="mobile-navlink">about</Link></li>
                        <li><Link to="/contact" onClick={()=>setmobile(false)} className="mobile-navlink">contact</Link></li>
                        <li><Link to="/services" onClick={()=>setmobile(false)} className="mobile-navlink">services</Link></li>
                    </ul>
                 </div>
                }
            </nav>
        </div>
    );
}
 
export default Navbar;