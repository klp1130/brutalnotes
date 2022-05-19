import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import noteService from './services/notes'
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
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
    setNewNote(' ')
    })
  }


  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  
  
    

    const handleDeleteNote = (id) => {
      console.log('delete note ' + id + ' with button')
      if (window.confirm(`Delete note ${id}?`)) {
        noteService
        .remove(id)
        .then(response => {
          setNotes(notes.filter(n => n.id !== id))
        })
      }
    }


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
                date={note.date} 
                handleDeleteNote={() => handleDeleteNote(note.id)}
              />
              
          )}

        </div>
      );
    </div>
    );
}

export default App;