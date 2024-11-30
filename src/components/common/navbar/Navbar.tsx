import './Navbar.css'
import navImg from '@/asset/img/navbar-icon/Group 1.png'
export default function Navbar(){
    return(
        <div data-aos="fade-down" className="navbar-container navbar-animation-Setting animate__animated animate__fadeInDown">
            <div className='navbar-section-1'>
                <div className='navbar-component-Icon'>
                   <img src={navImg.src}/>
                </div>
                <div className='navbar-component-links'> 
                    <a href="#section1">Advantages</a>
                    <a href="#section2">How it works</a>
                    <a href="#section3">Benefits</a>
                    <a href="https://ranking.rz.game/blog/">Blog</a>
                </div>
            </div>
            <div className='navbar-section-2'>
                <a href='#section5'><button>Join Now</button></a>
            </div>
        </div>
    )
}