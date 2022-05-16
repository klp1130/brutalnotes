import React from "react";
import Note from './components/Note';

    function NotesList({notes, handleDeleteNote}) {
      return (
        <div>
            {notes.map(note => 
            <Note 
                key={note.id} 
                note={note} 
                date={note.date} 
                handleDeleteNote={handleDeleteNote} />)}
        </div>
      );
    }
  
