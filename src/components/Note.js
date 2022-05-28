import { flexbox } from '@mui/system'
import React from 'react'

const noteStyle = {
    position: "relative",
    margin: "50px auto",
    maxWidth: "500px",
    padding: "1rem, 2rem, 1rem 5rem",
    backgroundSize: "100% 3rem",
    background: "#FFFCF3",
    border: "5px solid #FFFCF3",
    boxShadow: "1rem 1rem #000000",
    borderRadius: "5px",
    overflow: "hidden",   
}



const Note = ({note, date, handleDeleteNote, id}) => {

  return (
    <div class="note-container">
    <ul style={noteStyle}>
      <span>{note.content}</span>
      <br></br>
      <small>{date}</small>
      <br></br>
      <button class="delete-buttons" onClick={() => handleDeleteNote(note)}>
      Delete
    </button>
    </ul>
    </div>
  )
}

export default Note