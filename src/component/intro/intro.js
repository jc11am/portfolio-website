import "./intro.css"
import chuks from "../../img/top.JPG"

const Intro = function() {
    return(
        <div className="i">
            <div  className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Amadi Joseph</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am a self thought Web Developer. I am passionate about learning and building delightful
                        and scalable web sites and applications
                    </p>
                </div>
                

            </div>
            <div  className="i-right">
                <div className="i-bg"></div>
                <img src={chuks} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro