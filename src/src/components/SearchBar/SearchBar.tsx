import React, { ChangeEventHandler } from "react"
import "./SearchBar.css"

const SearchBar = ({ onType }: { onType: ChangeEventHandler<HTMLInputElement> }) => {
  return (
    <input className="SearchBar" type="text" placeholder=" 🔍  Search notes" onChange={onType} />
  )
}

export default SearchBar
