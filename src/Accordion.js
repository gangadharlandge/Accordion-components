import React, {useState} from 'react';

const Accordion = ({question,ans}) => {

    const [selected, setSelected] = useState(false)

    return (
        <>
            <div className='ques'>
              <h1> {question} </h1>
              <span  onClick={() => setSelected(!selected)}> {selected? "◀" : "▶"} </span>
            </div>
            <div >
              {selected && <p className='ans'>{ans}</p>}
              </div>
        </>
    );
}

export default Accordion;