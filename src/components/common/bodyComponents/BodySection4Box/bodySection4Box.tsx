import './bodySection4Box.css'
import img from '../../../../asset/img/body-Images/Section4/CoinIcon.png'

interface DataObj{
    img : string,
    text : string
}
export default function BodySection4Box({img , text} : DataObj){
    return(
        <div className="bodySection4Box-container">
            <img src={img}/>
            <p className='bodySection4Box-text-Section'>
                {text}
            </p>
        </div>
    )
}