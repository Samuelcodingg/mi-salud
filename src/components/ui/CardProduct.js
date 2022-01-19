import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addProductoCarrito } from '../../helpers/productOperations';

export const CardProduct = ({borderColor, img, title, titleColor, price, btnColor, id}) => {

    const style = {
        border: `1px solid ${borderColor}`
    }

    const styleTitle = {
        color: titleColor
    }

    const [valuesProduct, setValuesProduct] = useState({
        img: `${process.env.PUBLIC_URL}/assets/products/${img}.png`,
        nombre: title,
        precio: price
    });

    const handleClick = (product) => {
        addProductoCarrito(product);
        window.location.reload();
    }

    return (
        <div style={style} className='p-3 rounded'>
            <div className='px-2 text-center'>
                <Link
                    className="text-center"
                    to={`/detalles-producto/${id}`}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/products/${img}.png`} alt='producto' className='img-fluid'></img>            
                </Link>
            </div>
            <div style={styleTitle} className='text-center'>
                <p> {title} </p>
                <p>S/ {price} </p>
            </div>
            <div className='text-center'>
                <button
                    className={`btn btn-${btnColor}`}
                    onClick={() => handleClick(valuesProduct)}  
                >
                    Agregar al carrito &nbsp; <i className="fas fa-cart-plus"></i>
                </button>
            </div>
            
        </div>
    )
}
