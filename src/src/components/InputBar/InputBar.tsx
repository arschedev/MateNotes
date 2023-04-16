import React, { ChangeEventHandler } from "react"
import "./InputBar.css"

interface InputBarProps {
  placeholder: string
  onType: ChangeEventHandler<HTMLInputElement>
  value: string
}

const InputBar = ({ placeholder, onType, value }: InputBarProps) => {
  return (
    <input
      className="InputBar"
      type="text"
      placeholder={placeholder}
      onChange={onType}
      value={value}
    />
  )
}

export default InputBar
