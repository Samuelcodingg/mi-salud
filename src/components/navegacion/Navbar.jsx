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
