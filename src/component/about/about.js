import "./about.css"
import ama from "../../img/top2.JPG"

const About = function() {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={ama} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Skills</h1>
                <p className="a-desc">
                   JavaScript
                </p>
                <p className="a-desc">
                   React
                </p>
                <p className="a-desc">
                   Node.js
                </p>
                <p className="a-desc">
                   MongoDb
                </p>
                <p className="a-desc">
                   Express
                </p>
                <p className="a-desc">
                   Css
                </p>
            </div>
        </div>
    )

}

export default About