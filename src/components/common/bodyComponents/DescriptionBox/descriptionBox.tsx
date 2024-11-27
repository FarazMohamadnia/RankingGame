import './descriptionBox.css'
interface DescriptionBoxType{
    title : string,
    text : string ,
    img  : string ,
    classname : string
}

export default function DescriptionBox(data : DescriptionBoxType){
    const {title , text , img , classname} = data;
    return(
        <div data-aos="zoom-in" data-aos-duration="800" className={`DescriptionBox-container ${classname}`}>
            <img className={`${classname} DescriptionBox-animation-setting animate__animated animate__shakeY`} src={img}/>
            <p className='color1 DescriptionBox-title p-0 m-0'>{title}</p>
            <p className='text-light DescriptionBox-text'>{text}</p>
        </div>
    )
}