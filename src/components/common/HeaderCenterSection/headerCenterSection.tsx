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
            <div>
                <img className='mx-auto' src={textImg.src}/>
            </div>
            <div>
                <p className='fs-1 text-light'>
                    Rewrite your Gaming Story!
                    Get Ranked, Get Rich
                </p>
            </div>
            <div>
                <button className='HeaderCenterSection-container-Btn'>Get Early Access</button>
            </div>
            <span className='HeaderCenterSection-bottom-shadow'></span>
        </div>
    )
}