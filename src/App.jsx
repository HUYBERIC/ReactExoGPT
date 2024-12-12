import React, { useState } from 'react'
import Hello from './components/Hello'
import Greeting from './components/Greeting'
import Ex6 from './components/Ex6';
import Ex7 from './components/Ex7';
import Ex8 from './components/Ex8';

const App = () => {
/* Exercice 3 */
  const [message, setMessage] = useState("Click the button");

  function handleClick() {
    setMessage("Message is changed");
  };

/* Exercice 4 */
  const names = ["Alice", "Bob", "Charlie"];
  
/* Exercice 5 */
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value)
  }
  
  return (
    <>
    {/* Exercice 1 */}
      <Hello/>
    <br/>
    {/* Exercice 2 */}
    <h2>Exercice 2 : props</h2>
      <Greeting name="Eric"/>
      <Greeting name="Antoine!"/>
    <br/>
    {/* Exercice 3 */}
    <h2>Exercice 3 : useState</h2>
      <p>{message}</p>
      <button onClick={handleClick}>CLICK ME</button>
    <br/>
    <br/>
    {/* Exercice 4 */}
    <h2>Exercice 4 : map method</h2>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
    <br/>
    {/* Exercice 5 */}
    <h2>Exercice 5 : controlled input</h2>
    <div>
      <input 
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder='write something'
      />
      <p>You typed : {inputValue}</p>
    </div>
    <br/>
    {/* Exercice 6 */}
    <Ex6/>
    <br/>
    {/* Exercice 7 */}
    <Ex7/>
    <br/>
    {/* Exercice 8 */}
    <Ex8/>
    </>
  )
}

export default App