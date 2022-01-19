import React from 'react';
import { Link } from 'react-router-dom';

import logo from './image 3.png';
import logoLt from './image 4.png';
import saly from './Saly-22.png';
import saly7 from './Saly-7.png';
import shopIcon from './Group 37.png';
import cuponIcon from './Group 35.png';
import saludIcon from './Group 36.png';

export const ClubPage = () => {
    return (
        <div>
            <div className="bg-principal banner-height mb-5">
                <div className="container">
                    <div className='row d-flex'>
                        <div className='col-sm-6 mx-auto align-self-center text-center mb-5 pb-5'>
                            <img src={logo} alt="logo" />
                            <p className='text-white fs-5'>
                                Inscríbite gratis a Club MiSalud y obtén precios exclusivos y beneficios adicionales para ti y tu familia.
                            </p>
                            <div className='d-sm-flex justify-content-evenly'>
                                <Link
                                    to='/registro-club'
                                >
                                    <button className='boton w-little border-little fs-5 btn-rounded bg-white fw-bold btn-size'>
                                        ¿No eres parte de Club <br /> MiSalud?
                                        Regístrate aquí
                                    </button>
                                </Link>
                                
                                <button className='boton w-little border-little  mt-4 mt-sm-0  fs-5 btn-rounded bg-white fw-bold btn-size'>
                                    ¿Estás en Club MiSalud? <br />
                                    Actualiza tus datos
                                </button>
                            </div>
                        </div>
                        <div className='d-sm-inline d-none col mx-auto'>
                            <img src={saly} alt="saly" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-10'>
                <div className='row d-flex'>
                    <div className='col-sm-5 mx-auto text-center'>
                        <img src={saly} alt="saly" className='h-400 img-fluid' />
                    </div>
                    <div className='col-sm-7 mx-auto align-self-center mt-4 mt-sm-0'>
                        <img src={logoLt} alt="logo-lt" />
                        <p className='fw-bold'>
                            ¿Qué es Club MiSalud? <br />
                            Es el programa de fidelización de MiSalud que busca premiar a nuestros clientes por preferirnos. Para disfrutar de este beneficio, inscríbete y sumarás SaludPuntos por cada compra que realices.
                        </p>
                        <div className='d-inline d-sm-flex justify-content-evenly '>
                            <Link
                                to='/registro-club'
                            >
                                <button className='bg-principal boton btn-rounded text-white px-5 w-little border-little'>
                                    Inscríbete a Club MiSalud
                                </button>
                            </Link>
                            <button className='boton btn-rounded color-principal border-principal bg-white w-little mt-4 mt-sm-0 border-little px-4'>
                                Ya soy miembro de Club MiSalud
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container border-top mt-5 border-dark'>
                <h1 className='text-center mt-4'>Mis Beneficios</h1>
                <div className="row justify-content-evenly mt-5">
                    <p className='align-self-center col-5 text-center fw-bold'>
                        Acumula SaludPuntos comprando en cualquiera de nuestras boticas y/o web.
                    </p>
                    <div className='col-6'>
                        <img src={shopIcon} alt="shop-icon" className='d-block mx-auto img-fluid' />
                    </div>
                </div>
                <div className="row justify-content-evenly mt-5">
                    <div className='col-6'>
                        <img src={cuponIcon} alt="cupon-icon" className='d-block mx-auto img-fluid' />
                    </div>
                    <p className='align-self-center col-5 text-center fw-bold'>
                        Accede a cupones exclusivas en MiSalud
                    </p>
                </div>
                <div className="row justify-content-evenly mt-5">
                    <p className='align-self-center col-5 text-center fw-bold'>
                        Pregunta sobre cualquier inquietud médica tuya o de tu familia
                    </p>
                    <div className='col-6'>
                        <img src={saludIcon} alt="salud-icon" className='d-block mx-auto img-fluid' />
                    </div>
                </div>
            </div>

            <div className='container mt-5 border-top border-dark'>
                <div className={`row rounded border-solid mt-5 p-5 h-auto ${ window.innerWidth > 576 ? 'banner-height' : '' }`} >
                    <div className='col-sm-7'>
                        <h3 className='text-center'>¿Cómo acumulo SaludPuntos?</h3>
                        <div className='d-flex mt-0 mt-sm-4'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="50" height="50" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_369_749" transform="translate(0 -0.059322) scale(0.0169492)" />
                                    </pattern>
                                    <image id="image0_369_749" width="59" height="66" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>

                            <p className='ms-4'>
                                Una vez que ya estás inscrito, por cada S/1.00 (Un y 00/100 Soles) de compra acumularás un (10) SaludPuntos.
                            </p>
                        </div>
                        <div className='d-flex mt-4'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.75 31.25L31.25 18.75" stroke="#00B1A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.7917 20.8333C20.367 20.8333 20.8333 20.367 20.8333 19.7917C20.8333 19.2164 20.367 18.75 19.7917 18.75C19.2164 18.75 18.75 19.2164 18.75 19.7917C18.75 20.367 19.2164 20.8333 19.7917 20.8333Z" fill="#00B1A9" stroke="#00B1A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M30.2084 31.25C30.7837 31.25 31.2501 30.7836 31.2501 30.2083C31.2501 29.633 30.7837 29.1667 30.2084 29.1667C29.6331 29.1667 29.1667 29.633 29.1667 30.2083C29.1667 30.7836 29.6331 31.25 30.2084 31.25Z" fill="#00B1A9" stroke="#00B1A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25 43.75C35.3553 43.75 43.75 35.3553 43.75 25C43.75 14.6447 35.3553 6.25 25 6.25C14.6447 6.25 6.25 14.6447 6.25 25C6.25 35.3553 14.6447 43.75 25 43.75Z" stroke="#00B1A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='ms-4'>
                                Por cada mil (1,000) SaludPuntos acumulados obtendrás un (1) vale de descuento Club MiSalud de S/. 10.00
                            </p>
                        </div>
                        <div className='d-flex mt-4'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.5977 12.8174V6.5625C42.5977 5.69824 41.8994 5 41.0352 5H8.02737C7.16312 5 6.46487 5.69824 6.46487 6.5625V12.8174C5.64944 12.8662 5.00003 13.5449 5.00003 14.375V20.8057C4.9969 21.9875 5.23621 23.1575 5.70316 24.2432C5.91312 24.7412 6.17191 25.21 6.46487 25.6543V42.5C6.46487 43.3594 7.16312 44.0625 8.02737 44.0625H21.4063V35.4688H27.6563V44.0625H41.0352C41.8994 44.0625 42.5977 43.3643 42.5977 42.5V25.6543C42.8953 25.2088 43.1503 24.7364 43.3594 24.2432C43.8233 23.1543 44.0625 21.9971 44.0625 20.8057V14.375C44.0625 13.5449 43.4131 12.8662 42.5977 12.8174ZM39.0821 40.5518H30.7813V33.9062C30.7813 33.042 30.083 32.3438 29.2188 32.3438H19.8438C18.9795 32.3438 18.2813 33.042 18.2813 33.9062V40.5518H9.9805V28.7256C10.1221 28.7939 10.2686 28.8623 10.42 28.9209C11.5088 29.3799 12.666 29.6094 13.8575 29.6094C15.0489 29.6094 16.2012 29.3799 17.295 28.9209C17.9688 28.6377 18.6035 28.2764 19.1846 27.8418C19.1944 27.8369 19.2041 27.8369 19.2139 27.8418C19.7968 28.2782 20.4315 28.6407 21.1035 28.9209C22.1924 29.3799 23.3496 29.6094 24.541 29.6094C25.7325 29.6094 26.8848 29.3799 27.9785 28.9209C28.6524 28.6377 29.2871 28.2764 29.8682 27.8418C29.878 27.8369 29.8877 27.8369 29.8975 27.8418C30.4804 28.2782 31.1151 28.6407 31.7871 28.9209C32.876 29.3799 34.0332 29.6094 35.2246 29.6094C36.416 29.6094 37.5684 29.3799 38.6621 28.9209C38.8086 28.8574 38.9551 28.7939 39.1016 28.7256V40.5518H39.0821ZM39.0821 12.8125H9.9805V8.51562H39.0821V12.8125Z" fill="#00B1A9" />
                            </svg>


                            <p className='ms-4'>
                                Podrás usarlo en tu próxima compra en boticas MiSalud o mediante la página web,.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-sm-inline d-none'>
                        <img src={saly7} alt="saly7" className='img-fluid position-relative saly7' />
                    </div>
                </div>

            </div>
        </div>
    )
}
