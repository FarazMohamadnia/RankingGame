'use client'
import './headerCenterSection.css'
import textImg from '../../../asset/img/body-Images/Section1/RanktoearnText.png';
export default function HeaderCenterSection(){
    const scrollTo =()=>{
        // window.scro
    }
    return(
        <div className='HeaderCenterSection-container'>
            <video
                autoPlay
                loop
                muted
            > 
                <source src="/video/Landing-getrich.mp4" type="video/mp4" />
            </video>
            <div className='HeaderCenterSection-container-text-animation-setting animate__animated animate__fadeInUp'>
                <img className='mx-auto' src={textImg.src}/>
            </div>
            <div>
                <p className='HeaderCenterSection-container-text-animation-setting animate__animated animate__fadeInUp'>
                    Rewrite your Gaming Story!
                    Get Ranked, Get Rich
                </p>
            </div>
            <div>
                <a href='#Scroll-BTN'><button className='HeaderCenterSection-container-Btn HeaderCenterSection-container-Btn-animation-setting animate__bounceIn animate__animated'>Get Early Access</button></a>
            </div>
            <span className='HeaderCenterSection-bottom-shadow'></span>
        </div>
    )
}