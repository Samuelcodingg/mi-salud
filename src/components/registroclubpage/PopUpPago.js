import React, { useState } from 'react';
import logoEscudo from './icons/shield.png';
import logoPrincipal from './icons/logoPrincipal.png';
import logoTarjeta from './icons/logoTarjeta.png';
import logoTarjetaMC from './icons/logoMasterCard.png';
import logoVisa from './icons/logoVisa.png';
import closeIcon from './icons/closeIcon.png';


export const PopUpPago = () => {

    const [tarjeta, setTarjeta] = useState('1');

    const getValueTarjeta = (e) => {

        if (e.target === document.getElementById("input-tarjeta")) {
             const valueTarjeta = document.getElementById("input-tarjeta").value;

            if (valueTarjeta.substring(0, 1) === "4") {
                console.log("Es visaaaa");
                setTarjeta('1');
            }

            if (valueTarjeta.substring(0, 2) === "51" || valueTarjeta.substring(0,2) === "55") {
                console.log("Es mastercard");
                setTarjeta('2');
            }
        }
       
    }

    const closePopUp = (e) => {
        const $popupbox = document.querySelector(".popup-box");
        const $btnCerrar = document.querySelector(".btn-cerrar");
        const $btnAdquirirMembresia = document.querySelectorAll(".btn-aquirir-membresia")

        if (e.target === $btnCerrar || e.target === $btnCerrar.querySelector("img")) {
            $popupbox.classList.add("ocultar");
        } 

        $btnAdquirirMembresia.forEach(el => {
            if (e.target === el) {
                $popupbox.classList.remove("ocultar");
            }
        })
    }

    React.useEffect(() => {
        window.addEventListener('click', closePopUp);
        window.addEventListener('keyup', getValueTarjeta);

        
        return () => {
            window.removeEventListener('click', closePopUp);
            window.removeEventListener('keyup', getValueTarjeta);
        }

    }, []);

    return (
        <div className='col p-2 fondo-pago-popup' style={{width: "40rem"}}>
            <div className='row mt-2'>
                <div className='ms-3 d-inline-flex justify-content-between'>
                    <div className='d-inline-flex'>
                        <img src={logoEscudo} alt='escudo' width={25} height={25}/>
                        <p className='ms-2'><i>Tu seguridad es nuestra seguridad</i></p>
                    </div>
                    <button className='btn-cerrar me-4'><img src={closeIcon} className='mb-2' alt='escudo' style={{width: "100%"}}/></button>
                </div>
            </div>

            <div className='row d-flex justify-content-center'>
                <img src={logoPrincipal} alt='Logo Principal' style={{ width: "156px" }} />
                <h4 className='mt-3' style={{textAlign:"center"}}>Validación del medio de pago</h4>
            </div>

            <form className='needs-validation'>
                <div className='row ms-2 p-3'>
                <h4>Datos del titular</h4>
                <div className='row'>
                    <div className='col-sm-6'>
                        <p><i>Nombre</i></p>
                            <input type='text' className='form-control' name='nombre' placeholder='Escriba su nombre' pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" title='Ingrese su nombre sin números ni caracteres especiales' required></input>
                           
                    </div>
                    <div className='col-sm-6'>
                        <p><i>Apellido</i></p>
                        <input type='text' className='form-control' name='apellidos' placeholder='Escriba su apellido' pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" title='Ingrese su apellido sin números ni caracteres especiales' required></input>
                    </div>
                </div>
            </div>

            <div className='row ms-2 p-3 mb-4'>
                <h4>Datos de la tarjeta</h4>
                <div className='row'>
                    <div className='row'>
                        <p><i>Número de la tarjeta</i></p>
                        <div className='d-flex'>
                            <div style={{border: '1px solid #C4C4C4', borderRadius:'5px', backgroundColor:"white"}}>
                                <img src={logoTarjeta} alt='tarjeta' />
                            </div>
                            <div className='ms-1' style={{border: '1px solid #C4C4C4', borderRadius:'5px', display:"flex", backgroundColor:"white"}}>
                                <img src={tarjeta === '1' ? logoVisa : logoTarjetaMC} alt='tarjeta' style={{width:"3.8rem", margin:"auto"}}  />
                            </div>
                            <input type='text' id='input-tarjeta' className='form-control ms-2' name='tarjeta' placeholder='Ingrese los números de la tarjeta' pattern='^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$' title='Ingrese un número de tarjeta válido' maxLength='16' required></input>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-sm-6'>
                            <p><i>Fecha de expiración</i></p>
                            <div className='d-flex'>
                                
                                <input type='month' min="2022-01" className='form-control' required></input>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <p><i>Código de seguridad</i></p>
                            <input type='text' className='form-control' title='Ingrese un código de seguridad válido' placeholder='Número' maxLength='3' required></input>
                        </div>
                    </div>

                    {/* <div className='row mt-3'>
                        <p><i>Tipo de tarjeta</i></p>
                        <select className='form-select ms-2' required>
                            <option selected>Seleccione tipo</option>
                            <option value='tipo1'>tipo1</option>
                            <option value='tipo2'>tipo2</option>
                            <option value='tipo3'>tipo3</option>
                        </select>
                    </div> */}

                    <div className='row mt-4 ps-4'>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkTermsCond" required></input>
                            <label class="form-check-label" for="checkTermsCond">
                                He leído y acepto los términos y condiciones
                            </label>
                        </div>
                    </div>

                    <div className='text-center mt-4'>
                        <button type="submit" className='bg-principal boton btn-rounded text-white px-5 w-little border-little'> Adquirir membresía </button>
                     </div>
                </div>
            </div>
            </form>
            
            
            
        </div>
    )
}