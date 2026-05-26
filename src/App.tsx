import { useState } from 'react'
import './App.css'

import type { Items } from './interface/Items';
var idProduto = 1;
function App() {

  const [nameInput, setNameInput] = useState('');
  const [quantidadeInput, setQuantidadeInput] = useState<number | ''>('');
  const [items, setItems] = useState<Items[]>([]);

  function handleAddItem() {
    if (nameInput.trim() === '' || quantidadeInput === '' || quantidadeInput <= 0)
      return

    const novoItem = { id: idProduto, name: nameInput, quantidade: quantidadeInput }
    setItems([...items, novoItem]);

    idProduto++;
    setNameInput('');
    setQuantidadeInput('');
  }

  function handleRemove(id: number) {
    const updateCart = items.filter((item) => item.id !== id);
    setItems(updateCart);
  }

  return (
    <div className='container'>
      <h1>Lista de Compra</h1>
      <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
      <input type="number" value={quantidadeInput} onChange={(e) => setQuantidadeInput(e.target.value === '' ? '' : Number(e.target.value))} />
      <button onClick={handleAddItem}>Adicionar</button>

      <div>
        {items.map((item) => (
          <div className='item'>
            <h3>{item.name} -  {item.quantidade} </h3>
            <button onClick={() => handleRemove(item.id)}>Remover</button>
          </div>
        ))}
      </div>
    </div >
  )
}

export default App
