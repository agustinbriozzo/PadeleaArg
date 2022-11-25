import React from "react";

const Main = () => {
    return(
        <div className="container my-5">
            <h3 className="text-center">PRODUCTOS DESTACADOS</h3>
            <div className="row pt-5">
                <div className="col-md-3 text-center">
                    <img src="images/p1.jpg" alt="" />
                    <p>AXYM WOMAN 22</p>
                    <p> $131.100</p>
                    <p className="text-danger">3 cuotas sin interes de $43.700</p>
                    <button className="btn btn-primary">Agregar al carrito</button>
                </div>
                <div className="col-md-3 text-center">
                    <img src="images/p2.jpg" alt="" />
                    <p>AXYM 22</p>
                    <p> $131.100</p>
                    <p className="text-danger">3 cuotas sin interes de $43.700</p>
                    <button className="btn btn-primary">Agregar al carrito</button>
                </div>
                <div className="col-md-3 text-center">
                    <img src="images/p3.jpg" alt="" />
                    <p>Ionic PWR 22</p>
                    <p> $131.100</p>
                    <p className="text-danger">3 cuotas sin interes de $43.700</p>
                    <button className="btn btn-primary">Agregar al carrito</button>
                </div>
                <div className="col-md-3 text-center">
                    <img src="images/p4.jpg" alt="" />
                    <p>Ionic CTRL</p>
                    <p> $131.100</p>
                    <p className="text-danger">3 cuotas sin interes de $43.700</p>
                    <button className="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Main