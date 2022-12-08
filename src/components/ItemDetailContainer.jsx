import React, { useEffect, useState } from "react";
import arrayPaletas from "./json/paletas.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayPaletas.find(item => item.id === 1))
            }, 2000)
        })

        promesa.then((data) => {
            setItem(data)
        })
    })


    return(
        <div className="conainer">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer