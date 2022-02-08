import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  const [readMore, setReadMore] = useState(false);
  return (
        <div className="question">
          <header>
            <h4>{title}</h4>
            <button className='btn' onClick={() => setReadMore(!readMore)}>{readMore ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
          </header>
          {readMore && <p>{info}</p>}
        </div>
  );
};

export default Question;
