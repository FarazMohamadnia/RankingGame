import DescriptionBox from '@/components/common/bodyComponents/DescriptionBox/descriptionBox'
import './bodySection2.css'
import img1 from '../../../../asset/img/body-Images/Section2/coin1.png'
import img2 from '../../../../asset/img/body-Images/Section2/computer.png'
import img3 from '../../../../asset/img/body-Images/Section2/play.png'

const DescriptionBoxData =[
    {
        title : 'Play',
        text : 'Earn rewards while you play your favorite games anywhere. Ranking is designed to reward your time and skill in the gaming world.',
        img : img3.src,
        classname : 'DescriptionBox-animation-setting-1'
    },
    {
        title : 'Rank',
        text : 'Create your free Ranking account and join the revolution. Simple, fast, and secure. Start your journey to earning rewards now.',
        img :img2.src,
        classname : 'DescriptionBox-animation-setting-2'
    },
    {
        title : 'Earn',
        text : 'Collect Ranking points as you play and watch your earnings grow. Every game, every win, every moment counts. Playtime pays off.',
        img : img1.src ,
        classname : 'DescriptionBox-animation-setting-3'
    }
]
export default function BodySection2(){
    console.log(img3)
    return(
        <div id='section2' className="bodySection2-container">
            <span></span>
            <h4 data-aos-duration="800"  data-aos="zoom-in">
                How Ranking Works
            </h4>
            <div className='d-flex justify-content-center align-items-center'>
                <DescriptionBox {...DescriptionBoxData[0]}/>
                <DescriptionBox {...DescriptionBoxData[1]}/>
                <DescriptionBox {...DescriptionBoxData[2]}/>
            </div>
        </div>
    )
}