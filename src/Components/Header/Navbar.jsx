
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/image/Logo.png';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {
    const [Open, setOpen] = useState(true)
    return (
        <div className='bg-gradient-to-r from-[#FDFDFD] to-[#EBF6FC] px-4 md:px-0'>
        <div className="max-w-6xl mx-auto ">
        <div className='flex justify-between items-center py-10 '>
        <div><img src={Logo} alt="" className='h-[70px]  ' /></div>

        <div className={`hidden md:block `}>
        <div className='

        space-y-3 md:space-y-0 flex flex-col md:flex-row md:space-x-12    text-[#0B0B0B] font-normal text-lg'>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold text-lg" : ""
            }
            >
            Home
            </NavLink>
            <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold text-lg" : ""
            }
            >
            Donation
            </NavLink>
            <NavLink
            to='/statistics'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold text-lg" : ""
            }
            >
            Statistics
            </NavLink>
            <NavLink
            to='/location'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold text-lg" : ""
            }
            >
            Location
            </NavLink>
        </div>
        </div>
        {/* Toggle Navbar */}
        <div className={`md:hidden z-50 ${ !Open ? '        absolute top-32 left-64 bg-gradient-to-r from-[#FDFDFD] to-[#EBF6FC] shadow-2xl p-6 rounded-lg ' : 'hidden' }`}>
        <div className='


        space-y-3 md:space-y-0 flex flex-col md:flex-row md:space-x-12    text-[#0B0B0B] font-normal text-lg'>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold text-lg" : ""
            }
            >
            Home
            </NavLink>
            <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold text-lg" : ""
            }
            >
            Donation
            </NavLink>
            <NavLink
            to='/statistics'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold text-lg" : ""
            }
            >
            Statistics
            </NavLink>
            <NavLink
            to='/location'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold text-lg" : ""
            }
            >
            Location
            </NavLink>
        </div>
        </div>



        <button  onClick={()=> setOpen(!Open)} className='md:hidden p-3 md text-white shadow-2xl bg-[#FF444A] rounded-full text-4xl font-bold'>
            {
                Open ? <IoMenu/> : <IoMdClose/>
            }

        </button>

        </div>
        </div>
        </div>
    );
};

export default Navbar;