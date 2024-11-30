'use client'
import Navbar from "@/components/common/navbar/Navbar";
import './Header.css'
import HeaderCenterSection from "@/components/common/HeaderCenterSection/headerCenterSection";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
export default function Header(){
    return(
        <div className="Header-container">
            <div>
                <Navbar />
            </div>
            <div>
                <HeaderCenterSection />
            </div>
            <div className="Header-arrow-down animate__bounce animate__animated">
                {/* <IoMdArrowDropdown style={{filter:'drop-shadow(0px 3px 18.7px rgb(92, 242, 163)'}} size={'2rem'} color="rgba(92, 242, 163, 1)"/> */}
                <MdOutlineArrowDropDown className='BodySection3-polygon' color='rgba(92, 242, 163, 1)' size={'50px'}/>
            </div>
        </div>
    )
}