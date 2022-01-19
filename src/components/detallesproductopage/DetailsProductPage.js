import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addProductoCarrito, getProduct, getProductsByTipo } from '../../helpers/productOperations';
import { CardProduct } from '../ui/CardProduct';

import logos_visa from './logos_visa.png';
import fontisto_american_express from './fontisto_american-express.png';
import logos_mastercard from './logos_mastercard.png';
import logos_dinersclub from './logos_dinersclub.png';

export const DetailsProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        bigImg: '',
        img: '',
        precio: '',
        nombre: '',
        smallImg: ''
    });

    const { id: productId, name, description, price, bigImg, smallImg } = product;

    const [amount, setAmount] = useState(1);

    const [relacionados, setRelacionados] = useState([]);

    const handleChange = name => event => {
        setAmount(event.target.value);
    };

    const agregarProducto = (product) => {
        addProductoCarrito(product);
        window.location.reload();
    }

    useEffect(() => {
        const product = getProduct(id);
        setProduct({...product, img: `${process.env.PUBLIC_URL}/assets/products/${product.smallImg}.png`, nombre: product.name, precio: product.price});

        const relacionados = getProductsByTipo(product.tipo);
        setRelacionados(relacionados);
        console.log(relacionados);

    }, []);

    return (
        <div className='container'>
            <div className='btn-rounded border border-dark mt-4'>
                <div className='container'>
                    <div className='row p-5'>
                        <div className='col-sm-6 text-center'>
                            <img src={`${process.env.PUBLIC_URL}/assets/products/${bigImg}.png`} alt='producto' className='img-fluid'></img>
                        </div>
                        <div className='col-sm-6'>
                            <h1 className='color-principal text-uppercase'>{name}</h1>
                            <h1 className='text-danger mt-4'>S/ {price}</h1>
                            <h3 className='fw-bold mt-4'>DESCRIPCION</h3>
                            <p className='text-secondary fs-5'>
                                {description}
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
                                        <button 
                                            className="btn btn-danger w-100"
                                            onClick={() => agregarProducto(product)}
                                        >
                                            Agregar al carrito &nbsp;
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='border-dark border-bottom pb-2 mb-4'>Productos relacionados</h3>
                <div className='container'>
                    <div className='row'>
                        {
                            relacionados.slice(0, 4).map(product => (
                                <div className='col-sm-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'#00B1A9'}
                                        price={product.price}
                                        btnColor={'danger'}
                                        borderColor={'#000000'}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='container mt-5 border-top border-dark py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h5 className='text-center'>Formas de pago</h5>
                        </div>
                        <div className='col-sm-2 mx-auto'>
                            <img src={logos_visa} alt='visa' className='img-fluid'></img>
                        </div>
                        <div className='col-sm-2 mx-auto'>
                            <img src={logos_mastercard} alt='mastercard' className='img-fluid'></img>
                        </div>
                        <div className='col-sm-2 mx-auto'>
                            <img src={fontisto_american_express} alt='american express' className='img-fluid'></img>
                        </div>
                        <div className='col-sm-2 mx-auto'>
                            <img src={logos_dinersclub} alt='diners club' className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
