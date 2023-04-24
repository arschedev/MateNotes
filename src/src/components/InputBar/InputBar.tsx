import { FC, ChangeEventHandler } from "react"
import "./InputBar.css"

interface InputBarProps {
  placeholder: string
  onType: ChangeEventHandler<HTMLInputElement>
  value: string
}

export const InputBar: FC<InputBarProps> = ({ placeholder, onType, value }) => {
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
