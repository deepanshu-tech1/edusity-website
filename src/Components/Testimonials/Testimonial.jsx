import React, { useRef } from 'react'
import "./Testimonial.css"
import nexticon from "../../assets/next-icon.png"
import backicon from "../../assets/back-icon.png"
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"
const Testimonial = () => {
    const slider =useRef();
    let tx = 0;
    const slideforword=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`


    }
    const slidebackword=()=>{
          if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
        
    }




  return (
    <>
    <div className='testimonial'>
        <img src={nexticon} className='next-btn'onClick={slideforword} />
        <img src={backicon} alt=""  className='back-btn' onClick={slidebackword}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3>willion jackson</h3>
                                <span>Edusity ,usa</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis iure sed quibusdam quam voluptatibus quasi natus iusto quaerat! Facere tempora ipsam, ab inventore autem sed distinctio. Assumenda, est consectetur?</p>
                    </div>
                </li>
                   <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>willion jackson</h3>
                                <span>Edusity ,usa</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis iure sed quibusdam quam voluptatibus quasi natus iusto quaerat! Facere tempora ipsam, ab inventore autem sed distinctio. Assumenda, est consectetur?</p>
                    </div>
                </li>
                   <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>willion jackson</h3>
                                <span>Edusity ,usa</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis iure sed quibusdam quam voluptatibus quasi natus iusto quaerat! Facere tempora ipsam, ab inventore autem sed distinctio. Assumenda, est consectetur?</p>
                    </div>
                </li>
                   <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>willion jackson</h3>
                                <span>Edusity ,usa</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis iure sed quibusdam quam voluptatibus quasi natus iusto quaerat! Facere tempora ipsam, ab inventore autem sed distinctio. Assumenda, est consectetur?</p>
                    </div>
                </li>
            </ul>
        </div>


    </div>
    
    </>
  )
}

export default Testimonial
