import React from 'react'
import "./Contact.css"
import messsageicon from "../../assets/msg-icon.png"
import mailicon from "../../assets/mail-icon.png"
import phoneicon from "../../assets/phone-icon.png"
import locationicon from "../../assets/location-icon.png"
import whitearrow from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "549b3f37-88da-4b34-89ea-50770b2fef4f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
  <>
  <div className='contact'>
    <div className="contact-col">
        <h3>send us a message <img src={messsageicon}/></h3>
        <p>Lorem itaiores quaerat incidunt nesciunt ipsam odit non doloribus earum.</p>
        <ul>
            <li><img src={mailicon}/>contact@gmail.com</li>
            <li> <img src={phoneicon}/>+1 123-456-7898</li>
            <li> <img src={locationicon}/>77 massachusetts ave,cambridge</li>
        </ul>
    </div>
        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='enter your name' required />
                                <label htmlFor="">Phone number</label>
                                <input type="tel" name="phone" id="" placeholder='enter your mobile number' required/>
                                                <label htmlFor="">Write your message here</label>
                                                <textarea name="message" id="" rows={6} placeholder='enter your messaage' required ></textarea>

<button type='submit' className='btn darkbtn' > Submit now <img src={whitearrow}  /></button>
            </form>
            <span>{result}</span>
        </div>

  </div>
  
  </>
  )
}

export default Contact
