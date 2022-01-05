import React from 'react';
import logo1 from './icons/logoSaludPuntos.svg';
import logo2 from './icons/logoCupones.svg';
import logo3 from './icons/logoNotificaciones.svg';


export const MembresiaEstandar = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 d-flex justify-content-around mt-4'>
                    <div className='shape-container'>
                        <div className='hexagon d-flex align-items-center justify-content-center'>
                            <img src={logo1} alt='logo' width='100'></img>
                        </div>
                    </div>
                    <div className='text-container d-flex align-items-center'><h5>Acumula SaludPuntos comprando en cualquiera de nuestras boticas y/o web</h5></div>
                </div>
                <div className='col-lg-6 d-flex justify-content-around mt-4'>
                    <div className='shape-container'>
                        <div className='hexagon d-flex align-items-center justify-content-center'>
                            <img src={logo2} alt='logo' width='100'></img>
                        </div>
                    </div>
                    <div className='text-container d-flex align-items-center'><h5>Accede a cupones exclusivas en MiSalud</h5></div>
                </div>
                <div className='col-lg-6 d-flex justify-content-around mt-4'>
                    <div className='shape-container'>
                        <div className='hexagon d-flex align-items-center justify-content-center'>
                            <img src={logo3} alt='logo' width='100'></img>
                        </div>
                    </div>
                    <div className='text-container d-flex align-items-center'><h5>Recibe las mejores notificaciones sobre nuestras ultimas ofertas</h5></div>
                </div>
            </div>
            <div className='text-center m-5'>
                    <button
                        className='bg-principal boton btn-rounded text-white px-5 w-little border-little btn-aquirir-membresia'
                    >
                        Adquirir membresía
                    </button>
            </div>
        </div>
    )
}