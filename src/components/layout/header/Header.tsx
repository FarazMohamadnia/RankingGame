'use client'
import Navbar from "@/components/common/navbar/Navbar";
import './Header.css'
import HeaderCenterSection from "@/components/common/HeaderCenterSection/headerCenterSection";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Header(){
    return(
        <div className="Header-container">
            <div>
                <Navbar />
            </div>
            <div>
                <HeaderCenterSection />
            </div>
            <div className="Header-arrow-down">
                <IoMdArrowDropdown style={{filter:'drop-shadow(0px 3px 18.7px rgb(92, 242, 163)'}} width={'14px'} height={'14px'} color="rgba(92, 242, 163, 1)"/>
            </div>
        </div>
    )
}