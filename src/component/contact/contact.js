import { useRef, useState, useContext } from "react"
import "./contact.css"
import emailjs from 'emailjs-com';
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { ToggleContext } from "../../context/toggleContext";

const Contact = function() {
    const formRef = useRef()
    const [ done, setDone ] = useState(false)
    const theme = useContext(ToggleContext)
    const { darkMode, dispatch } = theme


    const handleSubmit= function(e) {
        e.preventDefault()

        emailjs.sendForm('service_dvd2qeg', 'template_mcsm3jl', formRef.current, 'v2bvP78XFEEDcLBY1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setDone(true)
    }

    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                             src={Phone}
                             alt="" 
                             className="c-icon"
                             />
                             +2349021705123
                        </div>
                        <div className="c-info-item">
                            <img
                             src={Email}
                             alt="" 
                             className="c-icon"
                             />
                             whoisjoeam@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                             src={Address}
                             alt="" 
                             className="c-icon"
                             />
                             No 15, jimoh adisa street, off ebuwawa road jigaye, Ogijo, Ogun state
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Get in touch.</b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name"/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{ backgroundColor: darkMode && "#333" }} name="message" rows="5" placeholder="Message"></textarea>
                        <button>Submit</button>
                        {done && "Message sent."}
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact