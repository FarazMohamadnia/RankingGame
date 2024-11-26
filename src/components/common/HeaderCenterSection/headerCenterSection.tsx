'use client'
import './headerCenterSection.css'
import textImg from '../../../asset/img/body-Images/Section1/RanktoearnText.png';
export default function HeaderCenterSection(){
    return(
        <div className='HeaderCenterSection-container'>
            <video
                autoPlay
                loop
                muted
            > 
                <source src="/video/ProjectVideo.mp4" type="video/mp4" />
            </video>
            <div className='HeaderCenterSection-container-text-animation-setting animate__animated animate__fadeInUp'>
                <img className='mx-auto' src={textImg.src}/>
            </div>
            <div>
                <p className='HeaderCenterSection-container-text-animation-setting fs-1 text-light animate__animated animate__fadeInUp'>
                    Rewrite your Gaming Story!
                    Get Ranked, Get Rich
                </p>
            </div>
            <div>
                <button className='HeaderCenterSection-container-Btn HeaderCenterSection-container-Btn-animation-setting animate__bounceIn animate__animated'>Get Early Access</button>
            </div>
            <span className='HeaderCenterSection-bottom-shadow'></span>
        </div>
    )
}