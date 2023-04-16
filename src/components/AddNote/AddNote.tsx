import React from "react"
import "./AddNote.css"

const AddNote = ({ click }: { click: () => void }) => {
  return (
    <div className="AddNote" onClick={click}>
      <a className="plus">+</a>
    </div>
  )
}

export default AddNote
