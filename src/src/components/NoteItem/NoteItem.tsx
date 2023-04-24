import { FC, MouseEventHandler } from "react"
import "./NoteItem.css"

interface NoteItemProps {
  id: string
  title: string
  description: string
  click: MouseEventHandler
  rightClick: MouseEventHandler
}

export const NoteItem: FC<NoteItemProps> = ({ id, title, description, click, rightClick }) => {
  return (
    <div className="NoteItem" id={id} onClick={click} onContextMenu={rightClick}>
      <a className="title">{title}</a>
      <a className="description">{description}</a>
    </div>
  )
}
