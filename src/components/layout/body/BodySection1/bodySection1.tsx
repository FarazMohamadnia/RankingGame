import './bodySection1.css';
import img1 from '@/asset/img/body-Images/Section1/bodyImage1.png';
import Icon from '@/asset/img/body-Images/Section1/Arrow.png'
import RankingSection from '@/components/common/bodyComponents/RankingSection/rankingSection';

export default function BodySection1(){
    return(
        <div id='Scroll-BTN' className='BodySection1-container'>
            <div className='BodySection1-topSection'>
                <div id='section1' className='BodySection1-topSection-left'>
                    <div data-aos="zoom-out-right" data-aos-duration="800" className='BodySection1-topSection-Icon'>
                        <span className='d-flex justify-content-center align-items-center h-100 '>
                            <img  className='' src={Icon.src}/>
                        </span>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="800">
                        <p className='fs-4 text-light p-0  m-0'>Join the Revolution; </p>
                        <p className='color1 fs-1 m-0'>
                            Play Anywhere,
                            <br/> 
                            <span className='color2 m-0'>Earn Here</span>
                        </p>
                    </div>
                </div>
                <div className=''>
                    <img className='BodySection1-filter-shadow' data-aos="zoom-out-left" data-aos-duration="800" src={img1.src}/>
                </div>
            </div>
            <div className='BodySection1-bottomSection'>
                <RankingSection />
            </div>
        </div>
    )
}