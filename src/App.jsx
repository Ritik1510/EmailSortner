import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [ text, setText ] = useState('Empty');
  let [ sortedEmails, setSortedEmails ] = useState(' ');
  const textareaRef = useRef(null);

  let expression = /[\w\.-]+@[\w\.-]+\.[a-z]{2,}/gi;

  const handleChange = (event) => {
    setText(event.target.value);
    const emails = text.match(expression);
    setSortedEmails(emails ? emails.join('\n') : 'No emails found');
  }

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = textarea.scrollHeight + "px"; // Set new height
  };

  return (
    <>
      <div className='input-section'>
        <div className="input-group">
          <span className="input-group-text">Unsorted Emails:</span>
          <textarea
            className="form-control textarea-cln"
            aria-label="With textarea"
            value={text}
            onChange={handleChange}></textarea>
        </div>
        <div className="input-group">
          <span className="input-group-text">Sorted Emails:</span>
          <textarea 
            className="form-control textarea-cln" 
            aria-label="With textarea" 
            value={sortedEmails}
            ref={textareaRef}
            onChange={handleInput}
            placeholder='Get Sorted Emails Here'>
          </textarea>
        </div>
      </div>
      <div>
        <button id='getSortedEmails' onClick={handleChange}>Get Sorted Mails</button>
      </div>
    </>
  )
}

export default App
