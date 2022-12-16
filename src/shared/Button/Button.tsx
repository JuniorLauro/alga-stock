import React from 'react'
import './Button.css'

declare interface ButtonProps {
    content?: string
    onCLick?: () => void
    appendIcon: JSX.Element
    children: string
}

const Button: React.FC<ButtonProps> = (props) => {
   return <button 
    className="AppButton"
    onClick={props.onCLick}
   >
    {props.children || 'Nameless Button'} 
    {props.appendIcon}
   </button>
}

export default Button