import React, { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "@/components/SearchBar"
import NoteItem from "@/components/NoteItem"
import AddNote from "@/components/AddNote"
import { INote } from "@/routes/Note"

import "./Home.css"

function Home() {
  const navigate = useNavigate()

  const [notes, setNotes] = useState<INote[]>(JSON.parse(localStorage.getItem("notes") ?? "[]"))
  const [searchQuery, setSearchQuery] = useState<string>("")

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    const note: INote = {
      id: Date.now().toString(),
      title: "",
      description: "",
      content: ""
    }
    setNotes([note, ...notes])
  }

  const openNote: MouseEventHandler = event => {
    navigate("/MateNotes/note", { state: { id: event.currentTarget.id } })
  }

  const deleteNote: MouseEventHandler = event => {
    if (confirm("Delete note?")) {
      setNotes(notes.filter(note => note.id !== event.currentTarget.id))
    }
    event.preventDefault()
  }

  const onSearch: ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value
    setSearchQuery(value)
  }

  return (
    <div className="Home Main">
      <SearchBar onType={onSearch} />
      {notes.length == 0 && <p className="no-notes-here-yet">No notes here yet</p>}
      {notes
        .filter(
          note =>
            note.content.toLowerCase().includes(searchQuery) ||
            note.title.toLowerCase().includes(searchQuery)
        )
        .map(note => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title.trim() ? note.title : "Untitled"}
            description={note.description.trim() ? `${note.description} ...` : "No text"}
            click={openNote}
            rightClick={deleteNote}
          />
        ))}
      <AddNote click={addNote} />
    </div>
  )
}

export default Home
