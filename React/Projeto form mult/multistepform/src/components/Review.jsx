import React from 'react'
import './Review.css'
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
  } from "react-icons/bs";
  

const Review = ({data, updateData}) => {
  return (
    <>
        <div className='radios'>
            <div className="input-radio">
                <input type="radio" name='emoji' value="Insatisfeito" onChange={(e)=>updateData("review","Insatisfeito")} checked={data.review === "Insatisfeito"} required/>
                <BsFillEmojiFrownFill className='emoji-i' />
                <span>Insatisfeito</span>
            </div>
            <div className="input-radio">
                <input type="radio" name='emoji'  value="Poderia ser melhor" onChange={(e)=>updateData("review","Poderia ser melhor")} checked={data.review === "Poderia ser melhor"} />
                <BsFillEmojiNeutralFill className='emoji-i'/>
                <span>Poderia ser melhor</span>
            </div>
            <div className="input-radio">
                <input type="radio" name='emoji' value="Satisfeito" onChange={(e)=>updateData("review","Satisfeito")} checked={data.review === "Satisfeito"} />
                <BsFillEmojiSmileFill className='emoji-i' />
                <span>Satisfeito</span>
            </div>
            <div className="input-radio">
                <input type="radio" name='emoji'  value="Muito satisfeito" onChange={(e)=>updateData("review","Muito satisfeito")} checked={data.review === "Muito satisfeito"} />
                <BsFillEmojiHeartEyesFill className='emoji-i'/>
                <span>Muito satisfeito</span>
            </div>
        </div>
    <div className="coment-area">
        <h4>Comentario:</h4>
        <textarea placeholder='Faça um comentario' value={data.comment || ""} onChange={(e)=>updateData("comment",e.target.value)}></textarea>
    </div>
    </>
    
  )
}

export default Review