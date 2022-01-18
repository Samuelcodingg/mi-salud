import React from 'react';
import logo from './Logo-misalud.png';
import iconFb from './icon-fb.png';
import iconTw from './icon-tw.png';
import iconIn from './icon-insta.png';
import iconLib from './libro.png';

const Footer = () => {
    return (
        <footer className='bg-white d-flex justify-content-around '>
            <div className='pt-3 text-center'>
                <img src={logo} alt="" />
                <p>Copyright © 2020 Mi - Salud.</p>
                <p>Todos los derechos reservados.</p>
                <div className='d-flex justify-content-around'>
                    <img src={iconIn} alt="" />
                    <img src={iconFb} alt="" />
                    <img src={iconTw} alt="" />
                </div>
            </div>
            <div className='d-flex pt-5'>
                <div className='d-flex'>
                    <div className='d-flex flex-column'>
                        <a>Compañia</a>
                        <a href=''>Contáctanos</a>
                        <a href=''>Testimo</a>
                        <a href=''>Nosotros</a>
                        <a href="">Trabaja con <br/>Nosotros</a>
                    </div>
                    <div className='d-flex flex-column px-5 pt-4'>
                        <a href="">Ayuda</a>
                        <a href="">Terminos de uso</a>
                        <a href="">Legal</a>
                        <a href="">Politica Legal</a>
                    </div>
                </div>
                <div>
                    <p>!Mantente al dia!</p>
                    <div className='align-self-center'>
                        <form class="d-flex">
                            <input class="form-control form-control-sm mx-2" type="text" placeholder="e-amil" aria-label=".form-control-sm example"></input>
                            <button class="btn btn-outline-success" type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div>
                        <img src={iconLib} alt="" />
                        <p>Libro de reclamaciones</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;