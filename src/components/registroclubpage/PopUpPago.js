import React from 'react';
import logoEscudo from './icons/shield.png';
import logoPrincipal from './icons/logoPrincipal.png';
import logoTarjeta from './icons/logoTarjeta.png';
import logoVisa from './icons/logoVisa.png';


export const PopUpPago = () => {
    return (
        <div className='col' style={{ border: "2px solid red", width: "40rem" }}>
            <div className='row mt-2'>
                <div className='ms-3 d-inline-flex'>
                    <img src={logoEscudo} alt='escudo' width={25} height={25}/>
                    <p className='ms-2'><i>Tu seguridad es nuestra seguridad</i></p>
                </div>
            </div>

            <div className='row d-flex justify-content-center'>
                <img src={logoPrincipal} alt='Logo Principal' style={{ width: "156px" }} />
                <h4 className='mt-3' style={{textAlign:"center"}}>Validación del medio de pago</h4>
            </div>

            <div className='row p-3'>
                <h4>Datos del titular</h4>
                <div className='row'>
                    <div className='col-sm-6'>
                        <p><i>Nombres</i></p>
                        <input type='text' className='form-control' name='nombres' placeholder='Escriba el nombre'></input>
                    </div>
                    <div className='col-sm-6'>
                        <p><i>Apellidos</i></p>
                        <input type='text' className='form-control' name='apellidos' placeholder='Escriba el apellido'></input>
                    </div>
                </div>
            </div>

            <div className='row p-3'>
                <h4>Datos de la tarjeta</h4>
                <div className='row'>
                    <div className='row'>
                        <p><i>Número de la tarjeta</i></p>
                        <div className='d-flex'>
                            <div style={{border: '1px solid black', borderRadius:'5px'}}>
                                <img src={logoTarjeta} alt='tarjeta' />
                            </div>
                            <div className='ms-1' style={{border: '1px solid black', borderRadius:'5px'}}>
                                <img src={logoVisa} alt='tarjeta' />
                            </div>
                            <input type='tel' className='form-control ms-2' name='nombres' placeholder='Ingrese los números de la tarjeta'></input>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm-6'>
                            <p><i>Fecha de expiración</i></p>
                            <div className='d-flex'>
                                
                                <input type='date' className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <p><i>Código de seguridad</i></p>
                            <input type='number' className='form-control' placeholder='Número'></input>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <p><i>Tipo de tarjeta</i></p>
                        <select className='form-select ms-2'>
                            <option selected>Seleccione tipo</option>
                            <option value='tipo1'>tipo1</option>
                            <option value='tipo2'>tipo2</option>
                            <option value='tipo3'>tipo3</option>
                        </select>
                    </div>

                    <div className='row mt-4 ps-4'>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkTermsCond"></input>
                            <label class="form-check-label" for="checkTermsCond">
                                He leído y acepto los términos y condiciones
                            </label>
                        </div>
                    </div>

                    <div className='text-center mt-4'>
                    <button
                        className='bg-principal boton btn-rounded text-white px-5 w-little border-little'
                    >
                        Adquirir membresía
                    </button>
            </div>
                </div>
            </div>
            
            
        </div>
    )
}