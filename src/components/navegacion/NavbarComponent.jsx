import React, {useState} from 'react';
import '../../index.css';
import imgVector from './Vector.png';
import imgLogoIcon from './Logo-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

export function NavbarComponent() {
    const [dropdown, setDropdown] = useState(false);
    
    const abiertoCerradoDropdown = () =>{
        setDropdown(!dropdown);
    }
    return (
        <React.Fragment >
            <nav className='bg-nav d-flex'>
                <Dropdown  isOpen={dropdown} toggle={abiertoCerradoDropdown} className='mg-left' size='sm'>
                    <DropdownToggle caret className='txt-cat boton-dropdown'>
                    Categorias
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Item 1</DropdownItem>
                        <DropdownItem>Item 2</DropdownItem>
                        <DropdownItem>Item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                {/*<a  href=''>
                    <div className=''>
                        <span className='me-2'>Categorias</span><img src={imgVector} alt="" />
                    </div>
                    
                </a>*/}
               
                <a className='txt-nav mg-left' href="#">
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
