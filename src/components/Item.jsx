import React from "react";

const Item = ({item}) => {
    return(
        <div className="col-md-4">
            <div className="card m-3 text-center border border-0">
            <img src={item.image} className="card-img-top" alt={item.name}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5 className="card-title">{item.price + "€"}</h5>
            </div>
        </div>
        </div>
    )
}

export default Item