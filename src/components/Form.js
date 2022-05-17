import React from "react"

const Form = ({addNote, newNote, handleNoteChange})=> {
      return (
          <div className='words'>
          <form onSubmit={addNote}>
          <input 
          value={newNote} 
          onChange={handleNoteChange} 
          />
          <button type="submit">save</button>
        </form>
      </div>);
}

    export default Form
  
  