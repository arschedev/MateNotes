import { FC, ChangeEventHandler } from "react"
import "./SearchBar.css"

interface SearchBarProps {
  onType: ChangeEventHandler<HTMLInputElement>
}

export const SearchBar: FC<SearchBarProps> = ({ onType }) => {
  return (
    <input className="SearchBar" type="text" placeholder=" 🔍  Search notes" onChange={onType} />
  )
}
