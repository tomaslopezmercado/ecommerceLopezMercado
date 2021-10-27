import React, { useState } from "react";

const ItemCount = () =>{
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador+1);
    }


return(
    <main>
        <p>Contador</p>
        <div>
            <div>
                <input onClick={aumentarContador} type = "number"/>
            </div>
        </div>
    </main>
)
}

export default ItemCount