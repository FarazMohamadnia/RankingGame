'use client'
import './headerCenterSection.css'

export default function HeaderCenterSection(){
    return(
        <div className='HeaderCenterSection-container'>
            <video
                controls
                autoPlay
                loop
                muted
                poster=""
            > 
                <source src="/video/ProjectVideo.mp4" type="video/mp4" />
            </video>
            <div>
                {/* <img src={textIcon.src}/> */}
                <h1 style={{fontFamily : 'none'}} data-text="RANK TO EARN">RANK TO <span style={{fontFamily : 'none'}}>EARN</span></h1>
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
        </div>
    )
}