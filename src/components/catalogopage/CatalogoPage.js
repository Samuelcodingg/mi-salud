import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, getProductsByTipo } from '../../helpers/productOperations';
import saly26 from './Saly-26.png';
import medico from './medico.png';
import infante from './niño.png';
import logo from '../clubpage/image 3.png';
import carritoIcon from './carrito-de-compras.png';
import { CardProduct } from '../ui/CardProduct';
import { productos } from '../../db/productos';
import { Banner } from './Banner';

export const CatalogoPage = () => {

    const [relacionados, setRelacionados] = useState([]);
    const [relacionadosCP, setRelacionadosCP] = useState([]);
    const [relacionadosCI, setRelacionadosCI] = useState([]);

    const [filtros, setFiltros] = useState('1');

    const desplegarItems = (e) => {
        const $filtros = document.querySelectorAll(".filtros-categorias a");
        const $desplegables = document.querySelectorAll(".accord-item");
        console.log(productos[0].name);
        
        $filtros.forEach(el => {
            if (e.target === el) {
                $filtros.forEach(el => el.classList.remove("fw-500"));
                el.classList.add("fw-500");
                setFiltros(el.getAttribute("value"));

                const $desplegable = document.getElementById(el.getAttribute("data-bs-target"));

                if (!$desplegable.classList.contains("show")) {
                    $desplegables.forEach(el=> el.classList.remove("show"))
                    $desplegable.classList.add("show");
                }
                
            }
        })
    }

    React.useEffect(() => {
        window.addEventListener("click", desplegarItems);

        const relacionados = productos;
        const relacionadosCP = getProductsByTipo('cuidado');
        const relacionadosCI = getProductsByTipo('infantil');

        setRelacionados(relacionados);
        setRelacionadosCP(relacionadosCP);
        setRelacionadosCI(relacionadosCI);

        return () => {
            window.removeEventListener("click", desplegarItems)
        }
    }, []);

    return (
        <div>
            {filtros === '1' ?
                <Banner descripcion="Los mejores productos con mayor calidad ya disponibles para garantizar la seguridad en tu salud." img={saly26} width={450} />
                : filtros === '2' ? <Banner descripcion="Los mejores productos de cuidado personal que puedes encontrar en tu ciudad" img={medico} width={300} />
                : <Banner descripcion="Los mejores productos de cuidado infantil que puedes encontrar en tu ciudad" img={infante} width={450}  />}
            

            <div className='row px-5 pt-4 d-flex justify-content-between'>
                <div className='d-flex' style={{ width: '20rem' }}>
                    {filtros === '1' ? 
                        <p className='mt-2'> <span style={{ color: '#00B1A9' }}>Inicio</span> {'>'} Catálogo</p>
                        : filtros === '2' ? <p className='mt-2'> <span style={{ color: '#00B1A9' }}>Inicio</span> {'>'} Catálogo {'>'} Cuidado Personal</p>
                        : <p className='mt-2'> <span style={{ color: '#00B1A9' }}>Inicio</span> {'>'} Catálogo {'>'} Cuidado Infantil</p>}
                    
                </div>
                
                <div className='d-flex justify-content-end' style={{width:'24rem'}}>
                    <p className='mt-2'>Ordenar por </p>
                    <select className='form-select ms-3' aria-label='ra' style={{width:"15rem", height:"2.5rem"}}>
                        <option value='1'>Nombre A-Z</option>
                        <option value='2'>Nombre Z-A</option>
                        <option value='3'>Precio (menor a mayor)</option>
                        <option value='4'>Precio (mayor a menor)</option>
                        <option value='5' selected>Relevancia</option>
                    </select>
                </div>
            </div>

            <div className='row px-5 pt-4 mb-5'>
                <div className='col-md-3'>
                    <div className='container-filtros p-3'>
                        <h5>Filtros</h5>
                        <hr></hr>
                        <p>Categorías</p>
                        <div className='ms-3 filtros-categorias'>
                            <a href="#collapse1" value='1' data-bs-toggle="collapse" data-bs-target="collapse1" aria-controls="collapse1">Todas las categorías</a><br></br>
                            <a href="#collapse2" value='2' data-bs-toggle="collapse" data-bs-target="collapse2" aria-controls="collapse2">Cuidado Personal</a><br></br>
                            <a href="#collapse3" value='3' data-bs-toggle="collapse" data-bs-target="collapse3" aria-controls="collapse3">Cuidado Infantil</a><br></br>
                            <a href="#collapse4" data-bs-toggle="collapse" data-bs-target="collapse4" aria-controls="collapse4">Categoría 4</a><br></br>
                            <a href="#collapse5" data-bs-toggle="collapse" data-bs-target="collapse5" aria-controls="collapse5">Categoría 5</a><br></br>
                            <a href="#collapse6" data-bs-toggle="collapse" data-bs-target="collapse6" aria-controls="collapse6">Categoría 6</a><br></br>
                            <a href="#collapse7" data-bs-toggle="collapse" data-bs-target="collapse7" aria-controls="collapse7">Categoría 7</a><br></br>
                            <a href="#collapse8" data-bs-toggle="collapse" data-bs-target="collapse8" aria-controls="collapse8">Categoría 8</a><br></br>
                            <a href="#collapse9" data-bs-toggle="collapse" data-bs-target="collapse9" aria-controls="collapse9">Categoría 9</a><br></br>
                            <a href="#collapse10" data-bs-toggle="collapse" data-bs-target="collapse10" aria-controls="collapse10">Categoría 10</a><br></br>
                        </div>
                    </div>
                </div>
                <div className='col-md-9 container-accord-items'>
                    <div id="collapse1" className='row accord-item accordion-collapse collapse show'>
                        {
                            relacionados.slice(0, 12).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                               </div>
                            ))
                        }
                        

                    </div>

                    <div id="collapse2" className='row accord-item accordion-collapse collapse'>
                        {
                            relacionadosCP.slice(0, 12).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                               </div>
                            ))
                        }
                    </div>

                    <div id="collapse3" className='row accord-item accordion-collapse collapse'>
                        {
                            relacionadosCI.slice(0, 12).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                               </div>
                            ))
                        }
                    </div>
                    
                    <div id="collapse4" className='accord-item accordion-collapse collapse'>
                        <p>A ver probando esta vaina xdd. Se despliega la sección 4</p>
                    </div>

                    <div id="collapse5" className='accord-item accordion-collapse collapse'>
                        <p>A ver probando esta vaina xdd. Se despliega la sección 5</p>
                    </div>

                    <div id="collapse6" className='accord-item accordion-collapse collapse'>
                        <p>A ver probando esta vaina xdd. Se despliega la sección 6</p>
                    </div>

                    <div id="collapse7" className='accord-item accordion-collapse collapse'>
                        <p>A ver probando esta vaina xdd. Se despliega la sección 7</p>
                    </div>

                    <div id="collapse8" className='accord-item accordion-collapse collapse'>
                        <p>A ver probando esta vaina xdd. Se despliega la sección 8</p>
                    </div>

                    <div id="collapse9" className='accord-item accordion-collapse collapse'>
                        <p>A ver probando esta vaina xdd. Se despliega la sección 9</p>
                    </div>

                    <div id="collapse10" className='accord-item accordion-collapse collapse'>
                        <p>A ver probando esta vaina xdd. Se despliega la sección 10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}