import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'


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
    <div>
      <header className='title'>Brutal Notes</header>
      
  <div className='words' contentEditable>
  <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
  </div>
  <div className='notes' contentEditable>

  </div>
      
    </div>
  );
}

export default App;
