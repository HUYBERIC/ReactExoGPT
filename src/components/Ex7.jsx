import React, { useState } from 'react'

const Ex7 = () => {
  const[items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("")

  function handleAddItem () {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  }

  function handleDelete(indexToDelete){
    setItems(items.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div>
      <h2>Exercice 7 : delete item from a list</h2>
      <input
      type="text"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      placeholder='add a new item'
      />
      <button onClick={handleAddItem}>Add it!</button>
      <ul>
        {items.map((item, index)=> (
          <li key={index}>{item}
          <button onClick={() => handleDelete(index)}>🚮</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ex7