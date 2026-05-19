import { use, useState } from 'react'
import './App.css'

import type { Items } from './interface/Items';

function App() {

  const [nameInput, setNameInput] = useState('');
  const [quantidadeInput, setQuantidadeInput] = useState(1);
  const [items, setItems] = useState<Items[]>([]);

  function handleAddItem() {
    if (nameInput.trim() === '')
      return

    const novoItem = { name: nameInput, quantidade: quantidadeInput }
    setItems([...items, novoItem]);

    setNameInput('')
    setQuantidadeInput(1)
  }

  function handleRemove() {

  }
  function handleEdit() {

  }
  return (
    <div className='container'>
      <h1>Lista de Compra</h1>
      <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
      <input type="number" value={quantidadeInput} onChange={(e) => setQuantidadeInput(Number(e.target.value))} />
      <button onClick={handleAddItem}>Adicionar</button>

      <div>
        {items.map((item) => (
          <div className='item'>
            <h3>{item.name} -  {item.quantidade} </h3>
            <button onClick={handleRemove}>Remover</button>
            <button onClick={handleEdit}>Editar</button>
          </div>
        ))}
      </div>
    </div >
  )
}

export default App
