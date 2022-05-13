import './App.css';
import './index.css';
import React  from 'react';

const App = () => {

  //const [notes, setNotes] = useState([])

  return (
    <div className="App">
<body>

  <div className='words' contentEditable placeholder='What would you like to say>'>
  </div>
  <div className='notes' contentEditable>

  </div>
</body> 
      
    </div>
  );
}

export default App;
