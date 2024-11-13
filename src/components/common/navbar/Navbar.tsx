import './Navbar.css'
import navImg from '@/asset/img/navbar-icon/Group 1.png'
export default function Navbar(){
    return(
        <div className="navbar-container">
            <div className='navbar-section-1'>
                <div className='navbar-component-Icon'>
                    {/* src for type script */}
                   <img src={navImg.src}/>
                </div>
                <div className='navbar-component-links'> 
                    <a href="">Benefits</a>
                    <a href="">Advantages</a>
                    <a href="">Testimonials</a>
                    <a href="">How it works</a>
                </div>
            </div>
            <div className='navbar-section-2'>
                <button>Join Now</button>
            </div>
        </div>
    )
}