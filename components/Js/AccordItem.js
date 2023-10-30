'use client'
import React, { useState } from 'react'

const AccordItem = ({header,text}) => {
    const [active,setActive]=useState(Boolean)
    const handleToggle = (event) => {
        event.preventDefault();
        setActive(!active);
      };
  return (
    <div className='flex flex-col '>
      <div className=" flex justify-between">
      <h1 className="question_text">{header}</h1>
    <button className='self-end' onClick={(e)=>{handleToggle(e)}} type="button">
        {!active? 
    <img src='./down_arrow.svg' className='w-6' alt=''/>:
    <img src='./down_arrow.svg' className='w-6' alt=''/>
}
      </button>
     
      </div>
      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="answer_text py-3  leading-relaxed ">{text}</p>
      </div>
  </div>
  )
}

export default AccordItem