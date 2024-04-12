import React from 'react'
import { MdMessage } from "react-icons/md";
import styles from "Button.module.css"; 

const Button = (props) => {

  const {isOutline, icon, text } = props; 
  return (
    <button className = {isOutline ? styles.outline_btn : styles.primary_btn}>
      <MdMessage  />
      {icon}
      {text}
    </button>

  )
}

export default Button;