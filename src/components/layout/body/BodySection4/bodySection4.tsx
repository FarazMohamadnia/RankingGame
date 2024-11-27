import BodySection4Box from '@/components/common/bodyComponents/BodySection4Box/bodySection4Box'
import img1 from '@/asset/img/body-Images/Section4/CoinIcon.png';
import img2 from '@/asset/img/body-Images/Section4/HumanWithCoinIcon.png';
import img3 from '@/asset/img/body-Images/Section4/candelStickIcon.png';
import img4 from '@/asset/img/body-Images/Section4/Icon1.png';
import img5 from '@/asset/img/body-Images/Section4/newIcon.png';
import img6 from '@/asset/img/body-Images/Section4/newIcon2.png';

import './bodySection4.css';
const Data = [
    {
        img :  img5.src,
        text :'Turn your scores into money'
    },
    {
        img :img1.src,
        text :'Monetize Your Playtime'
    },
    {
        img :img6.src,
        text :'Go Nuts, Get Seen'
    },
    {
        img :img2.src,
        text :'Unlock Your Potential'
    },
    {
        img :img3.src,
        text :'Next Generation P2E'
    },
    {
        img :img4.src,
        text :`Don't play for free`
    }
]
export default function BodySection4(){
    return(
        <div  id='section3' className='bodySection4-container'>
            <div className='bodySection4-layout'>
                <span className='bodySection4-Icon'><span className='bodySection4-Star-Icon'></span></span>
                <h5 data-aos-duration="800"  data-aos="zoom-in">Win or Lose, <span className='color2'>You Earn Either Way</span></h5>
                <div className='d-flex justify-content-center align-items-center flex-wrap'>
                    {
                        Data.map(data => <BodySection4Box key={data.text} {...data}/> )
                    }
                </div>
            </div>
        </div>
    )
}