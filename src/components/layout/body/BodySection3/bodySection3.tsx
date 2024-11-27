import './bodySection3.css'
import img from '../../../../asset/img/body-Images/Section3/computerIcon.png';
import img1 from '../../../../asset/img/body-Images/Section3/Icon1.png';
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function BodySection3(){
    return(
        <div className='BodySection3-container'>
            <div className='BodySection3-topSection'>
                <div className='BodySection3-topSection-right'>
                    <img data-aos="zoom-out-left" data-aos-duration="800"  src={img1.src}/>
                    <p data-aos="fade-left" data-aos-duration="800" className='text-light fs-5 m-0 p-0'>Unleash Your Inner Gamer;</p>
                    <p data-aos="fade-left" data-aos-duration="800" className='color2 fs-1'>Earn <span className='color1'>Real Rewards</span></p>
                </div>
                <div>
                    <img data-aos="zoom-out-right" data-aos-duration="800" className='BodySection3-topSection-image-style' src={img.src}/>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="800" className='BodySection3-BottomSection'>
                <div className='BodySection3-BottomSection-box'>
                        <div>
                            <p className='fs-1 text-light w-75 fw-bolder'>Ready to Start your Pro Gaming Career?</p>
                        </div>
                        <div>
                            <span></span>
                            <a href='#section5'><button>Join waitlist</button></a>
                        </div>
                </div>
            </div>
            <span><MdOutlineArrowDropDown className='BodySection3-polygon' color='rgba(92, 242, 163, 1)' size={'35px'}/></span>
        </div>
    )
}