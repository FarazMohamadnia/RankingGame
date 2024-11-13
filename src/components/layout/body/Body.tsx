import BodySection1 from "./BodySection1/bodySection1";
import BodySection2 from "./BodySection2/bodySection2";
import './Body.css'
export default function Body(){
    return(
        <div className="body-container">
            <div className="body-background-image">
                <BodySection1 />
                <BodySection2 />
            </div>
        </div>
        
    )
}