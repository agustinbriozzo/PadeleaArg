import React from "react";

const CartWidget = () => {
    return(
        <button type="button" className="btn position-relative">
            <img src="images/cart3.svg" alt="" width="27"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget