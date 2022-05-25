import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import noteService from './services/notes'
import Note from './components/Note';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);


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
      .catch(error => {
    console.log(error.message);
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

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return (
        <div className="mircophone-container">
          Browser is not Support Speech Recognition.
        </div>
      );
    }
    const handlelistening = () => {
      setIsListening(true);
      SpeechRecognition.startListening({
        continuous: true,
      });
    };
  
    const handleStop = () => {
      console.log({transcript})
      setIsListening(false);
      SpeechRecognition.stopListening();
    };
  
    const handleReset = () => {
      handleStop();
      resetTranscript();
    };
  
    const handleSave = (event) => {
      console.log(event+ {transcript});
    }

  return (
    <div className='container'>
    <Header />
      <div className='words' >
      <div className="Speak-wrapper">
      <div className="Speak-container">
        <button onClick={handlelistening}>Listen</button>
        <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button onClick={handleStop}>Stop</button>
        )}
      </div>
      {transcript && (
        <div className="speak-result-container">
          <div className="speak-result-text">{transcript}</div>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSave}>add to list</button>
        </div>
      )}
    
    </div>
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
      
    </div>
    
    );
}

export default App;