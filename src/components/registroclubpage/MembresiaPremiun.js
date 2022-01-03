import React from 'react'

export const MembresiaPremiun = () => {
    return (
        <div className='row'>
            <div className="col-11 col-sm-5 mx-auto border border-secondary rounded py-3 px-5">
                <div className='d-flex justify-content-center'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="50" height="50" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_369_749" transform="translate(0 -0.059322) scale(0.0169492)" />
                            </pattern>
                            <image id="image0_369_749" width="59" height="66" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                    <div className='ms-3'>
                        <h5>MiSalud mensual</h5>
                        <h5 className='fw-lighter fst-italic'>Pago mensual</h5>
                        <h5> <span className='fw-bold'>S/15.00</span>/mes </h5>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='d-flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill="#00B1A9"/>
                        </svg>
                        <p className='ms-2'>
                            Ofertas especiales cada mes 
                        </p>
                    </div>
                    <div className='d-flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill="#00B1A9"/>
                        </svg>
                        <p className='ms-2'>
                            Cuponera exclusiva, con descuentos especiales
                        </p>
                    </div>
                    <div className='d-flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill="#00B1A9"/>
                        </svg>
                        <p className='ms-2'>
                            Información extra en los catálogos para productos exclusivos.
                        </p>
                    </div>
                    <div className='d-flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill="#00B1A9"/>
                        </svg>
                        <p className='ms-2'>
                            Información extra en los catálogos para productos exclusivos.
                        </p>
                    </div>
                </div>
                <div className='text-center'>
                    <button
                        className='bg-principal boton btn-rounded text-white px-5 w-little border-little'
                    >
                        Adquirir membresía
                    </button>
                </div>
                
            </div>
            <div className="col-11 col-sm-5 mx-auto border border-secondary rounded py-3 px-5 mt-4 mt-sm-0">
                <div className='d-flex justify-content-center'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="50" height="50" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_369_749" transform="translate(0 -0.059322) scale(0.0169492)" />
                            </pattern>
                            <image id="image0_369_749" width="59" height="66" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                    <div className='ms-3'>
                        <h5>MiSalud Anual</h5>
                        <h5 className='fw-lighter fst-italic'>Pago anual</h5>
                        <h5> <span className='fw-bold'>S/13.99</span>/mes </h5>
                        <p className='fw-lighter fst-italic'>
                            Pago total S/160
                        </p>
                    </div>
                </div>
                <div className='mt-1'>
                    <div className='d-flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill="#00B1A9"/>
                        </svg>
                        <p className='ms-2'>
                            Ofertas especiales cada mes 
                        </p>
                    </div>
                    <div className='d-flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill="#00B1A9"/>
                        </svg>
                        <p className='ms-2'>
                            Cuponera exclusiva, con descuentos especiales
                        </p>
                    </div>
                    <div className='d-flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill="#00B1A9"/>
                        </svg>
                        <p className='ms-2'>
                            Información extra en los catálogos para productos exclusivos.
                        </p>
                    </div>
                    <div className='d-flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill="#00B1A9"/>
                        </svg>
                        <p className='ms-2'>
                            Información extra en los catálogos para productos exclusivos.
                        </p>
                    </div>
                </div>
                <div className='text-center'>
                    <button
                        className='bg-principal boton btn-rounded text-white px-5 w-little border-little'
                    >
                        Adquirir membresía
                    </button>
                </div>
            </div>
        </div>
    )
}
