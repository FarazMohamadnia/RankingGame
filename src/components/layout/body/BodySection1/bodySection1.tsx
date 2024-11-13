import './bodySection1.css';
import img1 from '@/asset/img/body-Images/Section1/bodyImage1.png';
import RankingSection from '@/components/common/bodyComponents/RankingSection/rankingSection';
import { FaCompressArrowsAlt } from "react-icons/fa";

export default function BodySection1(){
    return(
        <div className='BodySection1-container'>
            <div className='BodySection1-topSection'>
                <div className='BodySection1-topSection-left'>
                    <div className='BodySection1-topSection-Icon'>
                        <span className='d-flex justify-content-center align-items-center h-100'>
                            <FaCompressArrowsAlt className='color1' size={'60px'}/>
                        </span>
                    </div>
                    <div>
                        <p className='fs-4 text-light p-0 m-0'>Join the Revolution; </p>
                        <p className='color1 fs-1'>
                            Play Anywhere,
                            <br/> 
                            <span className='color2'>Earn Here</span>
                        </p>
                    </div>
                </div>
                <div className=''>
                    <img src={img1.src}/>
                </div>
            </div>
            <div className='BodySection1-bottomSection'>
                <RankingSection />
            </div>
        </div>
    )
}