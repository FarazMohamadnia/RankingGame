'use client'
import './ArticleCard.css'
import { FaFolder } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
export interface DataObj{
    newTitle : string |null ,
    image : string,
    url :string ,
    date : string ,
    category:string | null
}
export default function ArticleCard({image , newTitle , date , category} :DataObj){

    return(
        <div data-aos="zoom-in" data-aos-duration="800" className="ArticleCard-container">
            <img src={image}/>
            <p className='text-light fs-6 fw-bold text-start'>{newTitle}</p>
            <div className='d-flex justify-content-start align-items-center text-light'>
                <p className='ArticleCard-fontSize me-3 d-flex align-items-center'><FaFolder /><span className='ms-1'>{category}</span></p>
                <p className='ArticleCard-fontSize d-flex align-items-center'><CiCalendar fontSize={'15px'}/><span className='ms-1'>{date}</span></p>
            </div>
        </div>
    )
}