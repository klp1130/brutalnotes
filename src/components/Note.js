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


const Note = ({note, date, handleDelete}) => {

  return (
    <ul style={noteStyle}>
      <span>{note.content}</span>
      <small>{date}</small>
      <button onClick={() => handleDelete(note.id)}>
      Delete
      </button>
    </ul>
  )
}

export default Note