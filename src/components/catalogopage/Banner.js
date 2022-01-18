import React from "react";
import saly26 from './Saly-26.png';
import logo from '../clubpage/image 3.png';
import carritoIcon from './carrito-de-compras.png';

export const Banner = ({ descripcion, img, width }) => {
    
    return (
        <div className="bg-principal banner-height mb-5">
                <div className="container">
                    <div className='row d-flex'>
                        <div className='col-sm-6 mx-auto align-self-center text-center mb-5 pb-5'>
                            <img src={logo} alt="logo" />
                            <p className='text-white fs-5'>
                                {descripcion}
                            </p>
                            <div className='d-sm-flex justify-content-evenly'>
                                
                                <button className='boton w-little border-little  mt-4 mt-sm-0  fs-6 btn-rounded bg-white fw-bold btn-size d-flex p-3'>
                                    Ir al carrito 
                                    <img src={carritoIcon} alt='carrito de compras' width={25} />
                                </button>
                            </div>
                        </div>
                        <div className='d-sm-inline d-none col mx-auto ms-5'>
                            <img src={img} width={width} alt="saly" />
                        </div>
                    </div>
                </div>
            </div>
    )
    
}