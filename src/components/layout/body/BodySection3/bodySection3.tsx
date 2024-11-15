import './bodySection3.css'
import img from '../../../../asset/img/body-Images/Section3/computerIcon.png';
import img1 from '../../../../asset/img/body-Images/Section3/Icon1.png'
export default function BodySection3(){
    return(
        <div className='BodySection3-container'>
            <div className='BodySection3-topSection'>
                <div className='BodySection3-topSection-right'>
                    <img src={img1.src}/>
                    <p className='text-light fs-5 m-0 p-0'>Unleash Your Inner Gamer;</p>
                    <p className='color2 fs-2'>Earn <span className='color1'>Real Rewards</span></p>
                </div>
                <div>
                    <img className='BodySection3-topSection-image-style' src={img.src}/>
                </div>
            </div>
            <div className='BodySection3-BottomSection'>
                <div className='BodySection3-BottomSection-box'>
                        <div>
                            <p className='fs-1 text-light w-75 fw-bolder'>Ready to Start your Pro Gaming Career?</p>
                        </div>
                        <div>
                            <span></span>
                            <button>Join waitlist</button>
                        </div>
                </div>
            </div>
        </div>
    )
}