import { FC } from "react"
import "./AddNote.css"

interface AddNoteProps {
  click: () => void
}

export const AddNote: FC<AddNoteProps> = ({ click }) => {
  return (
    <div className="AddNote" onClick={click}>
      <a className="plus">+</a>
    </div>
  )
}
