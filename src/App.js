import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Note from './components/Note';
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const {noteToShow, setNoteToShow} = useState([])


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes.data)
        setNoteToShow(initialNotes)
      })
  }, [])

 /* noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !==id ? note : returnedNote.data))
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(filter(n => n.id !== id))
    })
*/

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote, 
      date: new Date().toISOString(),
      id: notes.length + 1,
  }
    
  noteService
    .create(noteObject)
    .then(returnedNote => {
    setNotes(notes.concat(returnedNote))
    setNoteToShow(notes.concat(returnedNote))
    })
  }


  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  
  noteService
    .deleteNote(id)
    .then(response => {
    setNotes(notes.filter(n => n.id !== id))
    setNoteToShow(noteToShow.filter(p=> p.id !==id))
    })
       

  

  return (
    <div className='container'>
    <Header />
      <div className='words' >
        <form onSubmit={addNote}>
          <input
            value={newNote}
            onChange={handleNoteChange}
          />
          <button type="submit">save</button>
        </form>
      </div>
    <div>
      {notes.map(note => 
        <Note 
          key={note.id}
          note={note}
        />  
        )}
      </div>
      

      
    </div>
  );
}

export default App;
