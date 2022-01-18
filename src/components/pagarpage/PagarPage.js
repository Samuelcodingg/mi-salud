import React from 'react';
import americanLogo from './american-logo.png';
import dinnersLogo from './dinners-logo.png';
import mastercardLogo from './mastercard-logo.png';
import visaLogo from './visa-logo.png';

export const PagarPage = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <div className='border border-dark'>
                        <h6 className='p-2 border-bottom border-dark'>
                            <i className="fas fa-map-marker-alt"></i> ¿En dónde recibirás tu pedido?
                        </h6>
                        <div className='d-flex align-items-center ms-2'>
                            <input type='radio' name='radio' id='radio1' className='mr-2' />
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
                            <input type='radio' name='radio' id='radio2' className='mr-2' />
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
                            <div className='rounded p-3 pointer border border-dark'>
                                8:00 - 12:00
                            </div>
                            <div className='rounded p-3 pointer border border-dark'>
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
                                    <input type='radio' name="card-radio" className='me-2' />
                                    <img src={americanLogo} alt='american-logo' className='mr-2' style={{ width: '100px', height: '80px' }} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between p-2'>
                                <div className='d-flex align-items-center'>
                                    <input type='radio' name="card-radio" className='me-2' />
                                    <img src={dinnersLogo} alt='dinners-logo' className='mr-2' style={{ width: '100px', height: '50px' }} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between p-2'>
                                <div className='d-flex align-items-center'>
                                    <input type='radio' name="card-radio" className='me-2' />
                                    <img src={mastercardLogo} alt='mastercard-logo' className='mr-2' style={{ width: '100px', height: '50px' }} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between p-2'>
                                <div className='d-flex align-items-center'>
                                    <input type='radio' name="card-radio" className='me-2' />
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

                </div>
            </div>
            <div className='mt-5'>
                <h6 className='my-4'>
                    Verifica tu información antes de confirmar la compra
                </h6>
                <div>
                    <div className='d-flex align-items-center mb-3'>
                        <i className="fas fa-map-marker-alt"></i> &nbsp; Tipo de entrega:
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <i className="fas fa-history"></i> &nbsp; Fecha y hora de entrega:
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <i className="fas fa-credit-card"></i> &nbsp; Medio de pago:
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
