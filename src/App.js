import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import noteService from './services/notes'
import Note from './components/Note';
import Form from './components/Form';

const App = () => {
  const [notes, setNotes] = useState()
  const [newNote, setNewNote] = useState([''])
  //const {showNote, setShowNote} = useState([])


  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
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
    .then(response => {
    setNotes(notes.concat(response))
    setNewNote(' ')
    })
  }


  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  
  /*noteService
    .deleteNote(id)
    .then(response => {
    setNotes(notes.filter(n => n.id !== id))
    setNoteToShow(noteToShow.filter(p=> p.id !==id))
    })
       */

   const deleteNote = (event, id) => {
      event.preventDefault()
      if (window.confirm(`Delete note ${id}?`)) {
        noteService
        .remove(id)
        .then(response => {
        setNotes(notes.filter(n => n.id !== id))
        })
      }
    }


//const notesToShow = showall

  return (
    <div className='container'>
    <Header />
      <Form   addNote={addNote} newNote={newNote} handleNoteChange={handleNoteChange}  />
        <div>
            {notes.map(note => 
            <Note 
                key={note.id} 
                note={note} 
                date={note.date} 
                deleteNote={deleteNote}
              />
          )}
        </div>
      );
    </div>
    );
}

export default App;
