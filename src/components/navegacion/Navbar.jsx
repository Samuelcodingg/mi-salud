import React, { useState } from 'react';
import { NavbarComponent } from './NavbarComponent';
import '../../index.css';
import imgLogo from './Logo-misalud.png';
import imgIconUbi from './ubicacion-icon.png';
import imgLogin from './Login-icon.png';
import imgCart from './mdi_cart.png';
import logoLogin from './logoLogin.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [loginOpened, setLoginOpened] = useState(false);
    const [registerOpened, setRegisterOpened] = useState(false);

    return (
        <React.Fragment>
            <div className="bg-white">
                <nav class="">
                    <div class=" d-flex justify-content-between mx-2">
                        <div className='d-flex align-self-center'>
                            <Link to="/">
                                <img src={imgLogo} alt="" />
                            </Link>
                            <div className='align-self-center direc'>
                                <a href="#" className='txt-log-nav'>
                                    <img src={imgIconUbi} alt="" /><span className='mx-2'>Ingresa tu dirección</span>
                                </a>
                            </div>
                        </div>
                        <div className='p-2 align-self-center'>
                            <form class="d-flex">
                                <input class="form-control form-control-sm mx-2" type="text" placeholder="Buscar un producto" aria-label=".form-control-sm example"></input>
                                <button class="btn btn-outline-success" type="submit"><i class="fas fa-search"></i></button>
                            </form>
                        </div>

                        <div className='d-flex'>
                            <div className='align-self-center mx-2'>
                                <a 
                                    href="#" 
                                    className='txt-log-nav'
                                    onClick={() => setLoginOpened(!loginOpened)}
                                >
                                    <img src={imgLogin} alt="" /><span className='mx-2'>Iniciar sesión</span>
                                </a>
                                {
                                    loginOpened ?
                                        <div className='p-5 text-center position-absolute bg-white login-div'>
                                            <img src={logoLogin} alt="logoLogin" />
                                            <form>
                                                <div className='form-group'>
                                                    <p>Iniciar Sesión</p>
                                                    <input type="email" className="form-control btn-rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"></input>
                                                </div>
                                                <div className='form-group mt-4'>
                                                    <input type="password" className="form-control btn-rounded" id="exampleInputPassword1" placeholder="Contraseña"></input>
                                                </div>
                                                <div className='form-group mt-4'>
                                                    <button type="submit" className="boton btn-rounded bg-principal text-white w-100">Iniciar Sesión</button>
                                                </div>
                                                <p>¿Aún no tienes una cuenta? <span 
                                                    className='pointer text-primary text-decoration-underline'
                                                    onClick={() => {
                                                        setRegisterOpened(!registerOpened)
                                                        setLoginOpened(!loginOpened)
                                                    } }
                                                    >
                                                        Regístrate
                                                    </span> 
                                                </p>
                                            </form>
                                        </div>
                                        :
                                        ''
                                }
                                {
                                    registerOpened ?
                                        <div className='p-4 fondo-registro position-absolute border border-dark'>   
                                            <p 
                                                className='pointer'
                                                onClick={() => setRegisterOpened(!registerOpened) }
                                            >
                                                <i class="fas fa-arrow-left"></i> Volver
                                            </p>
                                            <div className='text-center'>
                                                <img src={logoLogin} alt="logoLogin" />
                                            </div>
                                            <form className='container'>
                                                <div className='row'>
                                                    <p>
                                                        Información Esencial
                                                    </p>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <select
                                                                className='form-control'
                                                            >
                                                                <option>Tipo de documento</option>
                                                                <option>DNI</option>
                                                                <option>Pasaporte</option>
                                                                <option>Carnet de extranjería</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Número de documento"></input>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group mt-4'>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"></input>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group mt-4'>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Número de celular"></input>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4">
                                                        Información Personal
                                                    </p>
                                                    <div className='col-md-12'>
                                                        <div className='form-group mt-4'>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombres"></input>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group mt-4'>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido paterno"></input>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group mt-4'>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido materno"></input>
                                                        </div>
                                                    </div>
                                                    <div className='form-group mt-4'>
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                                        <label className='form-check-label' for="exampleCheck1">Acepto los términos y condiciones</label>
                                                    </div>
                                                    <div className='form-group mt-4 text-center'>
                                                        <button type="submit" className="boton btn-rounded bg-principal text-white px-5">Registrarme</button>
                                                    </div>
                                                </div>
                                            </form>                                                    
                                        </div>  
                                        :
                                        ''
                                }
                            </div>

                            <div className='align-self-center mx-2'>
                                <a href="#" className='txt-log-nav '>
                                    <img src={imgCart} alt="" /><span className='mx-2 '>Mi carrito</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </nav>
                <NavbarComponent />
            </div>
        </React.Fragment>
    )
}

export default Navbar;
