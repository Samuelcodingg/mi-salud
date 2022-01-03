import React, { useState } from 'react';
import { MembresiaPremiun } from './MembresiaPremiun';
import tshirtAndCircle from './tshirtAndCircle.png';

export const RegistroClubPage = () => {

    // Estado para el tipo de membresia
    const [tipoMembresia, setTipoMembresia] = useState('1');

    const handleChange = name => event => {
        console.log(event.target.value);
        setTipoMembresia(event.target.value);
    };

    return (
        <div>
            <div className='container'>
                <div className='row d-flex mb-4'>
                    <div className='col-sm-7 align-self-center'>
                        <h2 className='text-center text-sm-start'>¡Ya estás a punto de ser parte del club!</h2>
                        <p className='fw-lighter fst-italic fs-3'>
                            Comparte salud y bienestar con tu familia ahorrando a precios increíbles, con nuestras membresías estandar y premiun.
                        </p>
                        <p className='fs-5'> 
                            Elige el tipo de membresía que quieres adquirir
                        </p>
                        <select 
                            className='form-select'
                            value={tipoMembresia}
                            onChange={handleChange('tipoMembresia')}
                        >
                            <option 
                                value='1'
                            >
                                Membresía Premiun
                            </option>
                            <option
                                value='2'
                            >
                                Membresía Estándar
                            </option>
                        </select>
                    </div>
                    <div className='col-sm-5 d-sm-inline d-none'>
                        <img src={tshirtAndCircle} alt='T-shirt and circle' />
                    </div>
                </div>
                {/* Ingresar en el '' componente membresia estandar */}
                { tipoMembresia === '1' ? <MembresiaPremiun /> : '' }
            </div>
        </div>
    )
}
