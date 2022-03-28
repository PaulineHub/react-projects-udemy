import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if(!name){
      //display alert
    }
    else if(name && isEditing){
      //deal with edit
    }
    else {
      //show alert
      //add new item to the list
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      setName('');
    }
  }

  return (
    <div className='section-center'>
      {/* <Alert/> */}
      <div className='grocery-form'>
        <h3>grocery bud</h3>
        <form className='form-control' onSubmit={handleSubmit}>
          <input type="text" className='grocery' value={name} onChange={e => setName(e.target.value)} placeholder='chocolat'/>
          <button type="submit" className='submit-btn'>Submit</button>
        </form>
      </div>
      {/* list items */}
      {/* si la longueur de la liste est sup a 0, alors l'afficher */}
      {list.length > 0 && (
        <div className='grocery-container'>
          <List list={list}/>
          <button className='clear-btn'>Clear Items</button>
        </div>
      )}
    </div>

  )
}

export default App
