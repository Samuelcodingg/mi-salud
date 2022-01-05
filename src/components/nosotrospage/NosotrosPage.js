import React from 'react';
import doctorImg from './Doctor_Isometric 1.png';
import logoMarca from './image 2.png';
import confianza from './image 15.png';
import calidad from './image 16.png';
import seguridad from './image 17.png';

export const NosotrosPage = () => {
    return (
        <div>
            <div className="bg-principal">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-12 col-sm-5">
                            <img src={doctorImg} alt="doctor" className="img-fluid" />
                        </div>
                        <div className="col-12 col-sm-7 align-self-center">
                            <img src={logoMarca} alt="logo" className="img-fluid" />
                            <p className='mt-4 text-white fs-4'>
                                MiSalud es una empresa de venta de productos de farmacia. Contamos con una gran variedad de productos de farmacia, desde medicamentos para el dolor hasta productos de higiene personal. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h1 className='container  py-4'>
                    Nuestra Misión
                </h1>
                <p className='bg-principal text-white p-5 fs-4'>
                    Ofrecer una asistencia sanitaria de calidad, para alcanzar y mantener la salud, ofreciendo servicios farmacéuticos y productos, de forma profesional, servicial y cercana.
                </p>
            </div>
            <div className='text-center'>
                <h1 className='container  py-4'>
                Nuestra Visión
                </h1>
                <p className='bg-principal text-white p-5 fs-4'>
                    Con respecto a nuestros usuarios: facilitar un rápido acceso a los productos que precisen, primando los servicios profesionales, para que saquen el máximo beneficio a sus medicamentos.
                    <br />
                    Sobre nuestro equipo: responsabilizarse, respetar y cumplir el trabajo de forma individual, siendo conscientes de la importancia que tiene el trabajo de cada uno para conseguir un equipo eficaz y dinámico.
                </p>
            </div>
            <div>
                <h1 className='py-4 text-center'>
                    Nuestros Valores
                </h1>
                <div className='container'>
                    <div className='row text-center py-5'>
                        <div className='col-12 col-sm-4'>
                            <div>
                                <img src={confianza} alt="confianza" className="img-fluid" />
                                <h2>Confianza</h2>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div>
                                <img src={calidad} alt="calidad" className="img-fluid" />
                                <h2>Calidad</h2>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div>
                                <img src={seguridad} alt="seguridad" className="img-fluid" />
                                <h2>Seguridad</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
