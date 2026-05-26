import type { Items } from "../../interface/Items";

interface ItemCompraProps {
    item: Items;
    onRemove: (id: number) => void;
}

export function ItemCompraProps({ item, onRemove }: ItemCompraProps) {
    return (
        <div className="item">
            <h3>{item.name} - {item.quantidade} </h3>
            <button onClick={() => onRemove(item.id)}>Remover</button>
        </div>
    );
}