import { useState } from "react";
import './FormularioAdicao.css'

interface FormularioAdicaoProps {
    onAdd: (name: string, quantidade: number | '') => void;
}

export function FormularioAdicao({ onAdd }: FormularioAdicaoProps) {
    const [nameInput, setNameInput] = useState('');
    const [quantidadeInput, setQuantidadeInput] = useState<number | ''>('');

    function handleAddItem() {
        if (nameInput.trim() === '' || quantidadeInput === '' || quantidadeInput <= 0) {
            return;
        }

        onAdd(nameInput, quantidadeInput);
        setNameInput('');
        setQuantidadeInput('');
    }

    return (
        <div className="formulario">
            <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Nome do produto"
            />
            <input
                type="number"
                value={quantidadeInput}
                onChange={(e) => setQuantidadeInput(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="Qtd"
            />
            <button onClick={handleAddItem}>Adicionar</button>
        </div>
    );
}
