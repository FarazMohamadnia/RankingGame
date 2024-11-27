import './bodySection4Box.css'

interface DataObj{
    img : string,
    text : string
}
export default function BodySection4Box({img , text} : DataObj){
    return(
        <div data-aos="zoom-in" data-aos-duration="800" className="bodySection4Box-container">
            <img src={img}/>
            <p className='bodySection4Box-text-Section'>
                {text}
            </p>
        </div>
    )
}