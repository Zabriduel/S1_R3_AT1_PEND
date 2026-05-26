import { useState } from 'react'
import './App.css'


import type { Items } from './interface/Items';
import { FormularioAdicao } from './components/FormularioAdicao/FormularioAdicao';
import { ItemCompra } from './components/ItemCompra/ItemCompra';

var idProduto = 1;
function App() {
  const [items, setItems] = useState<Items[]>([]);

 function handleAddItem(name: string, quantidade: number | '') {
    const novoItem = { id: idProduto, name, quantidade: Number(quantidade) };
    setItems([...items, novoItem]);
    idProduto++;
  }

  function handleRemove(id: number) {
    const updateCart = items.filter((item) => item.id !== id);
    setItems(updateCart);
  }

   return (
    <div className='container'>
      <h1>Lista de Compra</h1>
      
      <FormularioAdicao onAdd={handleAddItem} />

      <div>
        {items.map((item) => (
          <ItemCompra 
            key={item.id} 
            item={item} 
            onRemove={handleRemove} 
          />
        ))}
      </div>
    </div>
  );
}


export default App
