import BodySection1 from "./BodySection1/bodySection1";
import BodySection2 from "./BodySection2/bodySection2";
import './Body.css'
import BodySection3 from "./BodySection3/bodySection3";
import BodySection4 from "./BodySection4/bodySection4";
import BodySection5 from "./BodySection5/bodySection5";
import BodySection6 from "./bodySection6/BodySection6";
import Footer from "../footer/Footer";
export default function Body(){
    return(
        <div className="body-container">
            <span className="body-background-image1"></span>
            <span className="body-background-image2"></span>
            <span className="body-background-image3"></span>
            <div>
                <BodySection1 />
                <BodySection2 />
                <BodySection3 />
                <BodySection4 />
                <div id="section5">
                    <BodySection5 />
                </div>
                <BodySection6 />   
                <Footer />
            </div>
        </div>
        
    )
}