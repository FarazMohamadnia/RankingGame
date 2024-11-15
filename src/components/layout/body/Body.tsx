import BodySection1 from "./BodySection1/bodySection1";
import BodySection2 from "./BodySection2/bodySection2";
import './Body.css'
import BodySection3 from "./BodySection3/bodySection3";
export default function Body(){
    return(
        <div className="body-container">
            <span className="body-background-image1"></span>
            <span className="body-background-image2"></span>
            <div>
                <BodySection1 />
                <BodySection2 />
                <BodySection3 />
            </div>
        </div>
        
    )
}