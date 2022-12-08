import React from "react";
import arrayPaletas from "./json/paletas.json"
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayPaletas)
            }, 2000)
        })

        promesa.then((data) => {
            setItems(data)
        })
    })
    return(
        <div className="container">
            <ItemList items={items}/>
            <ItemCount stock={10}/>
        </div>
    )
}

export default ItemListContainer