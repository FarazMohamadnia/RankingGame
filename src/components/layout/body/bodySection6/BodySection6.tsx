import ArticleCard, { DataObj } from '@/components/common/bodyComponents/articleCard/ArticleCard'
import './BodySection6.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function BodySection6(){
    const [Data, setData] = useState<DataObj[]>([]);

    const fetchData = async ()=>{
        const response = await axios.get('https://ranking-game-wc9n.vercel.app/xmlTest/XMLFILE.xml');
        const xmlData = response.data;

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        console.log(xmlDoc)
        const items = Array.from(xmlDoc.getElementsByTagName("item"));
        const latestitems = items.slice(0,4);
      
        latestitems.forEach((item) => {
            const Title = item.getElementsByTagName("title")[0].textContent;
            const Url = item.getElementsByTagName("link")[0].innerHTML;
            const date = item.getElementsByTagName("pubDate")[0].innerHTML;
            const dateObj = new Date(date);
            const year = dateObj.getFullYear();
            const month = dateObj.getMonth() + 1;
            const day = dateObj.getDate();
            const sendData = `${year}/${month}/${day}`
            const Category = item.getElementsByTagName("category")[0].textContent;
            let imgSrc;
            const content = item.getElementsByTagNameNS(
                "http://purl.org/rss/1.0/modules/content/",
                "encoded"
            )[0]?.textContent;
            
            if (content) {
                const contentDoc = new DOMParser().parseFromString(content, "text/html");
                const figureImg = contentDoc.querySelector("figure img");
                imgSrc = figureImg?.getAttribute("src");
            }
            
            Data.push({
                newTitle:Title,
                url : Url ,
                date : sendData ,
                category : Category,
                image : imgSrc ?? "default-image.jpg"
            })
        });
        const SendData = Data.slice(0,4);
        setData(SendData)

    }

    console.log(Data)

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div id='section4' className='bodySection6-Container'>
            <div>
                <span className='BodySection6-Icon'></span>
                <h6 data-aos-duration="800"  data-aos="zoom-in" className='fs-1 text-light text-center'>
                    Our Gaming Magazine
                </h6>
            </div>
            <div className='BodySection6-article-layout'>
                {Data.map((data : DataObj) => <a key={data.url} href={data.url} ><ArticleCard {...data}/></a>)}
            </div>
        </div>
    )
}