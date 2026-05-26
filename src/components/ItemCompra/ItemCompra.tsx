import type { Items } from "../../interface/Items";
import './ItemCompra.css'

interface ItemCompraProps {
    item: Items;
    onRemove: (id: number) => void;
}

export function ItemCompra({ item, onRemove }: ItemCompraProps) {
    return (
        <div className="item">
            <h3>{item.id}.{item.name} - Quantidade: {item.quantidade} </h3>
            <button onClick={() => onRemove(item.id)}>Remover</button>
        </div>
    );
}