import React from 'react';
import { NavbarComponent } from './NavbarComponent';
import '../../index.css';
import  imgLogo  from './Logo-misalud.png';
import imgIconUbi from './ubicacion-icon.png';
import imgLogin from './Login-icon.png';
import imgCart from './mdi_cart.png';


const Navbar = () =>{
    return (
        <React.Fragment>
            <div  className="bg-white">
                <nav class="">
                    <div class=" d-flex justify-content-between mx-2">
                        <div className='d-flex align-self-center'>
                            <a href="#">
                                <img src={imgLogo} alt="" />
                            </a>
                            <div className='align-self-center direc'>
                                <a href="#" className='txt-log-nav'> 
                                    <img src={imgIconUbi} alt="" /><span className='mx-2'>Ingresa tu dirección</span>
                                </a>
                            </div>
                        </div>
                        <div className='p-2 align-self-center'>
                            <form class="d-flex">
                                <input class="form-control form-control-sm mx-2" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>

                        <div className='d-flex'>
                            <div className='align-self-center mx-2'>
                                <a href="#" className='txt-log-nav'>
                                    <img src={imgLogin} alt="" /><span className='mx-2'>Iniciar sesión</span>
                                </a>
                            </div>

                            <div className='align-self-center mx-2'>
                                <a href="#" className='txt-log-nav '>
                                    <img src={imgCart} alt="" /><span className='mx-2 '>Mi carrito</span>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </nav>
                <NavbarComponent/>
            </div>
        </React.Fragment>
    )
}

export default Navbar;
