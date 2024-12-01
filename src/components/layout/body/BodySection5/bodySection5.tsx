'use client'
import { useState } from 'react'
import './bodySection5.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { MdOutlineArrowDropDown } from "react-icons/md";
interface DataType {
    name: string,
    value : string
}
export default function BodySection5(){
    const [data , setdata] = useState<DataType>( {name : '' , value : ''} );
    const [BtnDisabled ,setBtnDisabled]=useState<boolean>(false)
    const getData = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        const name = e.target.name; 
        setdata({
            ...data ,
            [name]: value
        })
    }

    const sendData =async()=>{
        setBtnDisabled(true)
        try{
            const response =await axios.post('http://localhost:4000/api/users/subscribe',data);
            setBtnDisabled(false)
            console.log(response)
            if(response.status === 200){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                  
            }
        }catch(err){
            setBtnDisabled(false)
            console.log(err);
            Swal.fire({
                title: 'Error',
                text: "Try again !!",
                icon: "error"
              });
        }
    }
    return(
        <div data-aos="zoom-in" data-aos-duration="800" className="bodySection5-container">
            <div className="bodySection5-layout">
                <span className='bodySection5-Icon'></span>
                <div>
                    <p className='bodySection5-title fs-1'>Ready to Revolutionize Your Gaming?</p>
                    <p className='bodySection5-text'>Join thousands of gamers who are waiting to earn with Ranking. Your journey starts soon. Embrace the future of gaming and turn your passion into profit.</p>
                </div>
                <div className='position-relative d-flex flex-column justify-content-early h-75 align-items-end text-start'>
                    <input onChange={getData} name='name' type="text" placeholder='Enter Your Name'/>
                    <input onChange={getData} name='email' type="text" placeholder='Enter Your Email'/>
                    <button disabled={BtnDisabled} onClick={sendData}>Join Waitlist</button>
                </div>
            </div>
        </div>
    )
}