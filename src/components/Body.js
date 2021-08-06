import React, { useState } from 'react';
import '../styles/Body.css';

function Body() {
    // Declra o useState
    const [ count, setCount ] = useState(0);
    const [ nome, setNome ] = useState("Eberle");

    return (
        <div className="Body">
            <div className="body__click__count">
                <p>Você clicou {count} vezes!</p>
                <button onClick={() => setCount(count + 1)}>
                    Clique aqui!
                </button>
                <button onClick={() => setCount(count * 0)}>
                    Clique aqui para resetar a contagem!
                </button>
            </div>

            <div className="body__name_changer">
                <p>Seu nome é {nome}!</p>
                <button onClick={() => setNome("Gabriel")}>
                    Clique aqui para trocar de nome!
                </button>
                <button onClick={() => setNome("Eberle")}>
                    Clique para voltar ao nome antigo
                </button>
            </div>
        
        </div>
    );
}

export default Body;