import './Footer.css'
import img from '../../../asset/img/navbar-icon/Group 1.png';
import { FaInstagram , FaFacebook } from "react-icons/fa";
import { FaXTwitter , FaLinkedin , FaYoutube} from "react-icons/fa6";

export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-bottonSection'>
                <div><img src={img.src}/></div>
                <div className='d-flex align-items-center'>
                    <p className='footer-text-style p-0 m-0'> © 2023 Ranking.game. All rights reserved.</p>
                    <div className='ms-4'>
                        <a className='footer-Link-style'>Privacy Policy</a>
                        <a className='footer-Link-style'>Terms of Service</a>
                        <a className='footer-Link-style'>Cookie Settings</a>
                    </div>
                </div>
                <div className='footer-Icon-Section'>
                    <FaFacebook fontSize={'24px'}/>
                    <FaInstagram fontSize={'24px'}/>
                    <FaXTwitter fontSize={'24px'}/>
                    <FaLinkedin fontSize={'24px'}/>
                    <FaYoutube fontSize={'24px'}/>
                </div>
            </div>
        </div>
    )
}