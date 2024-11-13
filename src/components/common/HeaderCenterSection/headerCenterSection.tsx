import './headerCenterSection.css'
import textIcon from '../../../asset/img/header-image/RANK_TO_EARN.png'
export default function HeaderCenterSection(){
    return(
        <div className='HeaderCenterSection-container'>
            <div>
                {/* <img src={textIcon.src}/> */}
                <h1 style={{fontFamily : 'none'}} data-text="RANK TO EARN">RANK TO <span style={{fontFamily : 'none'}}>EARN</span></h1>
            </div>
            <div>
                <p className='fs-1 text-light'>
                    Rewrite your Gaming Story!
                    Get Ranked, Get Rich
                </p>
            </div>
            <div>
                <button className='HeaderCenterSection-container-Btn'>Get Early Access</button>
            </div>
        </div>
    )
}