import React from 'react';
import '../../index.css';
import imgVector from './Vector.png';
import imgLogoIcon from './Logo-icon.png';

export function NavbarComponent() {
    return (
        <React.Fragment >
            <nav className='bg-nav'>
                <a className='mg-left txt-ct' href=''>
                    
                    <div className=''>
                        <span className='me-2'>Categorias</span><img src={imgVector} alt="" />
                    </div>
                    
                </a>
               
                <a className='txt-nav mg-left ' href="#">
                    <img src={imgLogoIcon} alt="" /><span className='ms-2 align-middle'>Club MiSalud</span></a>
                <a className='txt-nav mg-left' href="#">
                    <img src={imgLogoIcon} alt="" /><span className='ms-2 align-middle'>Ofertas del dia</span></a>
                <a className='txt-nav mg-left' href="#">
                    <img src={imgLogoIcon} alt="" /><span className='ms-2 align-middle'>Cuidado Personal</span></a>
                <a className='txt-nav mg-left' href="#">
                    <img src={imgLogoIcon} alt="" /><span className='ms-2 align-middle'>Cuidado Infantil</span></a>
            </nav>
        </React.Fragment>
    )
}
