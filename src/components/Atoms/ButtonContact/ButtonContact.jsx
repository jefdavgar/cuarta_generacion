import React from 'react'
import { Button } from 'react-bootstrap'
import "./css/ButtonContact.css"
const ButtonContact = ({text}) => {
  return (
    <a href='#contactanos'>
      <Button className='colorButton'>{text}</Button>
    </a>
  )
}

export default ButtonContact