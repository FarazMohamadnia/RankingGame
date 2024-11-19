import { useState } from 'react'
import './descriptionBox.css'
interface DescriptionBoxType{
    title : string,
    text : string ,
    img  : string
}
export default function DescriptionBox(data : DescriptionBoxType){
    const {title , text , img } = data
    console.log(img)
    return(
        <div className="DescriptionBox-container">
            <img src={img}/>
            <p className='color1 DescriptionBox-title p-0 m-0'>{title}</p>
            <p className='text-light DescriptionBox-text'>{text}</p>
        </div>
    )
}