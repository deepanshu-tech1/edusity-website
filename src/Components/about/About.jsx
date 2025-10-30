import React from 'react'
import "./About.css"
import aboutimg from "../../assets/about.png"
import playicon from "../../assets/play-icon.png"

const About = (props) => {
  return (
  <>
  <div className='about'>
    <div className="aboutleft">
        <img src={aboutimg}  className='about-img' />
         <img src={playicon}  className='play-icon' onClick={()=>{props.setplaystate(true)}} />
    </div>
    <div className="aboutright">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's leader Today</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt sed voluptas ad eaque tempore doloremque aliquam tempora et dolor quam accusamus accusantium, eius commodi quibusdam illo reiciendis quia deleniti.</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro asperiores accusamus nobis fugiat sunt? Hic perferendis provident natus tempora officiis excepturi possimus, earum, dolores dolor fuga sint cumque dolorum?
        Accusamus temporibus, exercitationem deserunt quibusdam eligendi, aut voluptatum laboriosam rerum animi praesentium explicabo consequuntur debitis assumenda reprehenderit eveniet placeat cupiditate iusto odit harum eum tempore illo cumque officia. Cum, praesentium.
        Quidem omnis quae suscipit facilis cum, delectus aliquam! Quaerat, maiores veniam deleniti molestias, accusamus corrupti error dolor voluptate eius quasi reiciendis qui debitis perferendis perspiciatis doloremque, repellat voluptates nisi? Saepe.</p>


        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cum sit, nobis, delectus, eveniet nulla esse enim totam itaque perspiciatis dolorem nihil distinctio eligendi porro. Qui beatae libero labore odit.</p>
    </div>

  </div>
  
  </>
  )
}

export default About
