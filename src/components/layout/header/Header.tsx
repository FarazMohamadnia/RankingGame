'use client'
import Navbar from "@/components/common/navbar/Navbar";
import './Header.css'
import HeaderCenterSection from "@/components/common/HeaderCenterSection/headerCenterSection";
import img from '@/asset/img/body-Images/Section1/arrowDown.png'
export default function Header(){
    return(
        <div className="Header-container">
            <div>
                <Navbar />
            </div>
            <div>
                <HeaderCenterSection />
            </div>
        </div>
    )
}