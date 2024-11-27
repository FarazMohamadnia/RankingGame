'use client'
import { NewData } from '@/data/Data'
import RankingText from '../RankingText/rankingText'
import'./RankingSection.css'
import centerIcon from '@/asset/img/body-Images/Section1/Group 9.png'
export default function RankingSection(){
    return(
        <div className="RankingSection-container">
            <img className='RankingSection-center-image' src={centerIcon.src}/>
            <h3 data-aos-duration="800"  data-aos="zoom-in">Elevate Your Game with Ranking</h3>
            <div className='RankingSection-description'>
                <RankingText {...NewData[0]} />
                <RankingText {...NewData[1]} />
                <RankingText {...NewData[2]} />
                <RankingText {...NewData[3]} />
                <RankingText {...NewData[4]} />
                <RankingText {...NewData[5]} />
                <span data-aos="fade-right" data-aos-duration="700" className='RankingSection-line1'></span>
                <span data-aos="fade-up" data-aos-duration="700" className='RankingSection-line RankingSection-line-size1'></span>
                <span data-aos="fade-up" data-aos-duration="700" className='RankingSection-line RankingSection-line-size2'></span>
                <span data-aos="fade-up" data-aos-duration="700" className='RankingSection-line RankingSection-line-size3'></span>
                <span data-aos="fade-left" data-aos-duration="700" className='RankingSection-line RankingSection-line-size4'></span>
                <span data-aos="fade-left" data-aos-duration="700" className='RankingSection-line-right'></span> 
                <span data-aos="fade-right" data-aos-duration="700" className='RankingSection-line-left'></span>
                <span data-aos="fade-up" data-aos-duration="700" style={{top : '84px' , right : '513px' }} className='RankingSection-arrow-style'></span>
                <span data-aos="fade-up" data-aos-duration="700" style={{transform : 'rotate(90deg)' , top :'180px' , right : '17px' }} className='RankingSection-arrow-style'></span>
                <span data-aos="fade-up" data-aos-duration="700" style={{transform : 'rotate(180deg)' , top :'274px' , right : '513px' }} className='RankingSection-arrow-style'></span>
                <span data-aos="fade-up" data-aos-duration="700" style={{top :'454px' , right : '513px' }} className='RankingSection-arrow-style'></span>
                <span data-aos="fade-up" data-aos-duration="700" style={{transform : 'rotate(90deg)' ,top :'370px' , right : '1011px' }} className='RankingSection-arrow-style'></span>
            </div>
        </div>
    )
}