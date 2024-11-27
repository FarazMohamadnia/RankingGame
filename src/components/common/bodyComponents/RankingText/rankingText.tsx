
import './rankingText.css';
interface DataObj{
    number : number,
    title : string,
    text : string ,
    color : string
}

export default function RankingText(data : DataObj ){
    const { title , text , color , number }=data
    return(
        <div 
            style={color !== ' ' ? {background:`${color}`} : {backgroundColor : 'red'}} 
            className={`RankingText-container`}
            data-aos="fade-up"
            data-aos-duration="700"
        >
            <div className='RankingText-number mb-4'>
                <p>{number}</p>
            </div>
            <div className='RankingText-text'>
                <p className='RankingText-title-style color1 mb-2 px-3'>{title}</p>
                <p className='RankingText-text-style px-3'>{text}</p>
            </div>
        </div>
    )
}