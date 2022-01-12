import React from 'react';

export const CardProduct = ({borderColor, img, title, titleColor, price, btnColor}) => {
    
    const style = {
        border: `1px solid ${borderColor}`
    }

    const styleTitle = {
        color: titleColor
    }

    return (
        <div style={style} className='p-3 rounded'>
            <div className='px-2 text-center'>
                <img src={`${process.env.PUBLIC_URL}/assets/products/${img}.png`} alt='producto' className='img-fluid'></img>
            </div>
            <div style={styleTitle} className='text-center'>
                <p> {title} </p>
                <p> {price} </p>
            </div>
            <div className='text-center'>
                <button
                    className={`btn btn-${btnColor}`}
                >
                    Agregar al carrito &nbsp; <i className="fas fa-cart-plus"></i>
                </button>
            </div>
            
        </div>
    )
}
