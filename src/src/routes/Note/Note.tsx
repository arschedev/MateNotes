import React, { useState, ChangeEventHandler, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import InputBar from "@/components/InputBar"
import "./Note.css"

export interface INote {
  id: string
  title: string
  description: string
  content: string
}

function Note() {
  const navigate = useNavigate()
  const location = useLocation()

  const notes: INote[] = JSON.parse(localStorage.getItem("notes") ?? "[]")
  const noteIndex: number = notes.indexOf(notes.filter(note => note.id === location.state.id)[0])

  const [title, setTitle] = useState<string>(notes[noteIndex].title)
  const [content, setContent] = useState<string>(notes[noteIndex].content)

  useEffect(() => {
    notes[noteIndex].title = title
    notes[noteIndex].content = content
    notes[noteIndex].description = content.split("\n")[0]

    localStorage.setItem("notes", JSON.stringify(notes))
  }, [title, content])

  const onTitle: ChangeEventHandler<HTMLInputElement> = event => {
    setTitle(event.target.value)
  }

  const onContent: ChangeEventHandler<HTMLTextAreaElement> = event => {
    setContent(event.target.value)
  }

  return (
    <div className="Note Main">
      <a className="back" onClick={() => navigate("/")}>
        &larr;
      </a>
      <br />
      <div className="title-in">
        <InputBar placeholder="Title" onType={onTitle} value={title} />
      </div>
      <br />
      <textarea
        className="textarea"
        autoFocus={true}
        disabled={false}
        placeholder="Start typing"
        onChange={onContent}
        value={content}
      />
    </div>
  )
}

export default Note
