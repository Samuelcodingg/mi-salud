import React, { useState } from 'react';
import { getPrecioTotal } from '../../helpers/productOperations';
import americanLogo from './american-logo.png';
import dinnersLogo from './dinners-logo.png';
import mastercardLogo from './mastercard-logo.png';
import visaLogo from './visa-logo.png';

export const PagarPage = () => {

    const [valuesPedido, setValuesPedido] = useState({
        recepcion: '',
        horario: '',
        pago: ''
    });

    const precioProductos = getPrecioTotal();

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <div className='border border-dark'>
                        <h6 className='p-2 border-bottom border-dark'>
                            <i className="fas fa-map-marker-alt"></i> ¿En dónde recibirás tu pedido?
                        </h6>
                        <div className='d-flex align-items-center ms-2'>
                            <input 
                                type='radio' 
                                name='radio' 
                                id='radio1' 
                                className='mr-2' 
                                onClick={() => setValuesPedido({...valuesPedido, recepcion: 'Delivery'})}
                            />
                            <label htmlFor='radio1'>
                                <p className='p-2 mb-0'>
                                    En tu dirección actual &nbsp;
                                    <span className='color-principal bg-principal-2 p-1'>
                                        Pago adicional
                                    </span>
                                </p>
                            </label>
                        </div>
                        <p className='text-secondary ps-4'>
                            Recibe tu pedido donde estés
                        </p>
                        <div className='d-flex align-items-center ps-2 border-top border-dark'>
                            <input 
                                type='radio' 
                                name='radio' 
                                id='radio2' 
                                className='mr-2' 
                                onClick={() => setValuesPedido({...valuesPedido, recepcion: 'Retiro'})}    
                            />
                            <label htmlFor='radio2'>
                                <p className='p-2 mb-0'>
                                    En una botica &nbsp;
                                    <span className='color-principal bg-principal-2 p-1'>
                                        Gratis
                                    </span>
                                </p>
                            </label>
                        </div>
                        <p className='text-secondary ps-4'>
                            ¡Olvídate del costo de envío!
                        </p>
                    </div>
                    <div className='border border-dark mt-5'>
                        <h6 className='p-2 border-bottom border-dark'>
                            <i className="fas fa-history"></i> &nbsp; Horario de recojo
                        </h6>
                        <div className='d-flex align-items-center ms-2 justify-content-evenly py-4'>
                            <div 
                                className={`rounded p-3 pointer border ${valuesPedido.horario==='8:00 - 12:00' ? 'border-primary' : 'border-dark' } `}
                                onClick={() => setValuesPedido({...valuesPedido, horario: '8:00 - 12:00'})}
                            >
                                8:00 - 12:00
                            </div>
                            <div 
                                className={`rounded p-3 pointer border ${valuesPedido.horario==='13:00 - 20:00' ? 'border-primary' : 'border-dark'} `}
                                onClick={() => setValuesPedido({...valuesPedido, horario: '13:00 - 20:00'})}    
                            >
                                
                                13:00 - 20:00
                            </div>
                        </div>
                    </div>
                    <div className='border border-dark mt-5'>
                        <h6 className='p-2 border-bottom border-dark'>
                            <i className="fas fa-credit-card"></i> &nbsp; ¿Cómo quieres pagar?
                        </h6>
                        <div className='d-flex align-items-center ms-2 justify-content-evenly'>
                            <div className='d-flex align-items-center justify-content-between p-2'>
                                <div className='d-flex align-items-center'>
                                    <input 
                                        type='radio' 
                                        name="card-radio" 
                                        className='me-2' 
                                        onClick={() => setValuesPedido({...valuesPedido, pago: 'American Express'})}    
                                    />
                                    <img src={americanLogo} alt='american-logo' className='mr-2' style={{ width: '100px', height: '80px' }} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between p-2'>
                                <div className='d-flex align-items-center'>
                                    <input 
                                        type='radio' 
                                        name="card-radio" 
                                        className='me-2' 
                                        onClick={() => setValuesPedido({...valuesPedido, pago: 'Dinners Club'})}
                                    />
                                    <img src={dinnersLogo} alt='dinners-logo' className='mr-2' style={{ width: '100px', height: '50px' }} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between p-2'>
                                <div className='d-flex align-items-center'>
                                    <input 
                                        type='radio' 
                                        name="card-radio" 
                                        className='me-2' 
                                        onClick={() => setValuesPedido({...valuesPedido, pago: 'Mastercard'})}
                                    />
                                    <img src={mastercardLogo} alt='mastercard-logo' className='mr-2' style={{ width: '100px', height: '50px' }} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between p-2'>
                                <div className='d-flex align-items-center'>
                                    <input 
                                        type='radio' 
                                        name="card-radio" 
                                        className='me-2' 
                                        onClick={() => setValuesPedido({...valuesPedido, pago: 'Visa'})}
                                    />
                                    <img src={visaLogo} alt='visa-logo' className='mr-2' style={{ width: '100px', height: '50px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-3 offset-1 border border-dark px-0 min-h-500'>
                    <h6 className='border-bottom border-dark py-2 text-center'>
                        Resumen de pedido
                    </h6>
                    <div>
                        <div className='d-flex justify-content-between px-2'>
                            <p className='text-secondary'>
                                Costo de productos
                            </p>
                            <p className='text-secondary'>
                                S/ {precioProductos}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between px-2'>
                            <p className='text-secondary'>
                                Costo de envío
                            </p>
                            <p className='text-secondary'>
                                {valuesPedido.recepcion === 'Retiro' ? 'Gratis' : 'S/ 5.00'}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between px-2'>
                            <p className='text-dark fw-bold'>
                                Total
                            </p>
                            <p className='text-dark fw-bold'>
                                S/ {precioProductos + (valuesPedido.recepcion === 'Retiro' ? 0 : 5)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h6 className='my-4'>
                    Verifica tu información antes de confirmar la compra
                </h6>
                <div>
                    <div className='d-flex align-items-center mb-3'>
                        <i className="fas fa-map-marker-alt"></i> &nbsp; Tipo de entrega: {valuesPedido.recepcion}
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <i className="fas fa-history"></i> &nbsp; Fecha y hora de entrega: {valuesPedido.horario}
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <i className="fas fa-credit-card"></i> &nbsp; Medio de pago: {valuesPedido.pago}
                    </div>
                </div>
                <div className='text-center'>
                    <button className='boton btn-rounded bg-principal text-white px-5'>
                        Confirmar compra
                    </button>
                </div>
            </div>
        </div>
    )
}
