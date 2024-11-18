'use client'
import './ArticleCard.css'
import img from '../../../../asset/img/body-Images/Section6/test.jpg';
import { FaFolder } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import axios from 'axios';
export default function ArticleCard(){
    const getData =async ()=>{
        try{
        const response = await axios.get<string>('https://ranking.rz.game/blog/feed/', {
            headers: {
              'Content-Type': 'application/rss+xml',
            },
          });
          console.log(response);
        }catch(err){
            console.log(err)
        }
    }
    getData()
    return(
        <div className="ArticleCard-container">
            <img src={img.src}/>
            <p className='text-light fs-6 fw-bold text-start'>new article</p>
            <div className='d-flex justify-content-start align-items-center text-light'>
                <p className='ArticleCard-fontSize me-3 d-flex align-items-center'><FaFolder /><span className='ms-1'>Owner</span>1</p>
                <p className='ArticleCard-fontSize d-flex align-items-center'><CiCalendar fontSize={'15px'}/><span className='ms-1'>12/11/2024</span></p>
            </div>
        </div>
    )
}