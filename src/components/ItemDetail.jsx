import React from "react";

const ItemDetail = ({item}) => {
    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.image} alt={item.name} className="img-fluid"/>
            </div>
            <div className="col-md-4 offset-md-2 mt-5">
                <h1>{item.name}</h1>
                <h3>{item.price} €</h3>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail