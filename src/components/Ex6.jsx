import React, { useState } from 'react'

const Ex6 = () => {
  const[items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("")

  function handleAddItem () {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  }

  return (
    <div>
      <h2>Exercice 6 : add and show item in a list</h2>
      <input
      type="text"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      placeholder='add a new item'
      />
      <button onClick={handleAddItem}>Add it!</button>
      <ul>
        {items.map((item, index)=> (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ex6