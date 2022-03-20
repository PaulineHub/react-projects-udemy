import React, { useState } from 'react';
import data from './data';
/*
champs de texte qui genere un ou plusieurs composants d'un tb de donnees. 
Genere au minimum 1 paragraphe, et max 8 paragraphes.
CHECK EX 06-TABS
*/
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count);
    let amount = parseInt(count);
    setParagraphs(data.slice(0,amount));

  }

  return (
    <main>
      <div className="section-center section">
        <h3>Tired of boring lorem ipsum ?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs</label>
          <input type="number" min="1" max="8" id="amount" name='amount' value={count} onChange={e => setCount(e.target.value)}/>
          <button type="submit" className='btn'>generate</button>
        </form>
      </div>
    <div className='lorem-text'>
      {
      paragraphs.map((paragraph, index) => {
        return (
          <div className="result">
            <p key={index}>{paragraph}</p>
          </div>
        )
      })
      }
    </div>
  </main>
    )
}

export default App;
