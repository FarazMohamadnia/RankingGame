import './bodySection5.css'
export default function BodySection5(){
    return(
        <div className="bodySection5-container">
            <div className="bodySection5-layout">
                <span className='bodySection5-Icon'></span>
                <div className="">
                    <p className='bodySection5-title'>Ready to Revolutionize Your Gaming?</p>
                    <p className='bodySection5-text'>Join thousands of gamers who are waiting to earn with Ranking. Your journey starts soon. Embrace the future of gaming and turn your passion into profit.</p>
                </div>
                <div className='d-flex flex-column justify-content-early h-75 align-items-end text-start'>
                    <input type="text" placeholder='Enter Your Name'/>
                    <input type="text" placeholder='Enter Your Email'/>
                    <button>Join Waitlist</button>
                </div>
            </div>
        </div>
    )
}