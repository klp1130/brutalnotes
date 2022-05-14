import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled');
        setNotes(response.data)
     })
  }, [])
    console.log('render', notes.length, 'notes');


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote, 
      date: new Date().toISOString(),
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')

  }


  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  

  return (
    <>
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
    <div className='savedNotes' >


  </div>
      
    </>
  );
}

export default App;
