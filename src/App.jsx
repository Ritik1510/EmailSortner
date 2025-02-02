import { useState } from 'react'
import './App.css'

function App() {
  const [ text, setText ] = useState('Empty');
  let [ sortedEmails, setSortedEmails ] = useState(' ');

  let expression = /[\w\.-]+@[\w\.-]+\.[a-z]{2,}/gi;
  
  const handleChange = (event) => {
    setText(event.target.value);
    const emails = text.match(expression);
    setSortedEmails(emails ? emails.join('\n') : 'No emails found');
  }

  return (
    <>
      <div>
        <label htmlFor="inputText">Enter unfilteres data : </label>
        <input
          placeholder='text'
          id='inputText'
          value={text}
          onChange={handleChange} />
      </div>
      <label htmlFor="textarea">Textarea for sorted emails : </label>
      <div>
        <button id='getSortedEmails' onClick={handleChange}>Get Sorted Mails</button>
      </div>
      <div>
        <h3>Sorted Emails:</h3>
        <pre>{sortedEmails}</pre>
      </div>
    </>
  )
}

export default App
