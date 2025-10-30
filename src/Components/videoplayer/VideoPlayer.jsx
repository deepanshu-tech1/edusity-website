import React, { useRef } from 'react'
import "./VideoPlayer.css"
import collgevideo from "../../assets/Hansraj College (Delhi University) Campus Tour ｜｜ North Campus ｜｜ Visit Shahrukh khan's College.mp4"

const VideoPlayer = (props) => {
    const player=useRef(null);
    const closeplayer=(e)=>{
        if(e.target===player.current){
            props.setplaystate(false);
        }

    }
  return (
    <>
    <div className={`videoplayer ${props.playstate?'':'hide'}`  }ref={player}   onClick={closeplayer}>
        <video src={collgevideo} autoPlay controls ></video>
    </div>
    
    </>
  )
}

export default VideoPlayer
