import React from 'react'
import style from './email.module.css'


const Email = (props) => {
  return (
    <>
    <fieldset>
     <legend>{props.text1}</legend>
     <input type='text' placeholder='enter your name'/>
    </fieldset>
    <fieldset>
     <legend>{props.text2}</legend>
     <input type='text' placeholder='enter your name'/>
    </fieldset>
    <fieldset>
     <legend>{props.text3}</legend>
     <input type='text' placeholder='enter your name'/>
    </fieldset>
    </>
  )
}

export default Email