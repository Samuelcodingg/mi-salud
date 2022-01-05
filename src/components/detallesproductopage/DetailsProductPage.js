import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../helpers/productOperations';

export const DetailsProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        bigImg: '',
        smallImg: ''
    });

    const [amount, setAmount] = useState(1);

    const handleChange = name => event => {
        setAmount(event.target.value);
    };

    useEffect(() => {
        const product = getProduct(id);
        setProduct(product);
    },[]);

    return (
        <div className='container'>
            <div className='btn-rounded border border-dark mt-4'>
                <div className='container'>
                    <div className='row p-5'>
                        <div className='col-sm-6 text-center'>
                            <img src={`${process.env.PUBLIC_URL}/assets/products/${product.bigImg}.png`} alt='producto' className='img-fluid'></img>
                        </div>
                        <div className='col-sm-6'>
                            <h1 className='color-principal text-uppercase'>{product.name}</h1>
                            <h1 className='text-danger mt-4'>{product.price}</h1>
                            <h3 className='fw-bold mt-4'>DESCRIPCION</h3>
                            <p className='text-secondary fs-5'>
                                {product.description}
                            </p>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-5 d-flex'>
                                        <button 
                                            className='boton border border-dark py-0 px-3'
                                            onClick={() => setAmount(amount - 1)}    
                                        >
                                            -
                                        </button>    
                                        <input type='number' className='form-control border border-dark  border-start-0 border-end-0 rounded-0 text-center hide-arrows' value={amount} onChange={handleChange('amount')}></input>
                                        <button 
                                            className='boton border border-dark py-0 px-3'
                                            onClick={() => setAmount(amount + 1)}
                                        >
                                            +
                                        </button>
                                    </div>        
                                    <div className='col-7'>
                                        <button className="btn btn-danger w-100">
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
