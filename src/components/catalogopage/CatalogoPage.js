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
    const [tipoOrdenamiento, setTipoOrdenamiento] = useState('1');
    const [filtros, setFiltros] = useState('1');

    const handleChange = name => event => {
        console.log(event.target.value);
        setTipoOrdenamiento(event.target.value);
    };

    const ordenAlfabeticoAZ = (x, y) => {
        if (x.name < y.name) return -1;
        if (x.name > y.name) return +1;
        return 0;
    }

    const ordenAlfabeticoZA = (x, y) => {
        if (x.name < y.name) return +1;
        if (x.name > y.name) return -1;
        return 0;
    }

    const ordenPrecioMenorMayor = (x, y) => {
        return (x.price - y.price); 
    }

    const ordenPrecioMayorMenor = (x, y) => {
        return (y.price - x.price ); 
    }

    const desplegarItems = (e) => {
        const $filtros = document.querySelectorAll(".filtros-categorias a");
        const $desplegables = document.querySelectorAll(".accord-item");
        
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
                    <select className='form-select ms-3' aria-label='ra' style={{ width: "15rem", height: "2.5rem" }}
                    value={tipoOrdenamiento} onChange={handleChange('tipoOrdenamiento')}>
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
                            <a href="#todas-categorias" value='1' data-bs-toggle="collapse" data-bs-target="todas-categorias" aria-controls="todas-categorias">Todas las categorías</a><br></br>
                            <a href="#cuidado-personal" value='2' data-bs-toggle="collapse" data-bs-target="cuidado-personal" aria-controls="cuidado-personal">Cuidado Personal</a><br></br>
                            <a href="#cuidado-infantil" value='3' data-bs-toggle="collapse" data-bs-target="cuidado-infantil" aria-controls="cuidado-infantil">Cuidado Infantil</a><br></br>
                            {/* <a href="#collapse4" data-bs-toggle="collapse" data-bs-target="collapse4" aria-controls="collapse4">Categoría 4</a><br></br>
                            <a href="#collapse5" data-bs-toggle="collapse" data-bs-target="collapse5" aria-controls="collapse5">Categoría 5</a><br></br>
                            <a href="#collapse6" data-bs-toggle="collapse" data-bs-target="collapse6" aria-controls="collapse6">Categoría 6</a><br></br>
                            <a href="#collapse7" data-bs-toggle="collapse" data-bs-target="collapse7" aria-controls="collapse7">Categoría 7</a><br></br>
                            <a href="#collapse8" data-bs-toggle="collapse" data-bs-target="collapse8" aria-controls="collapse8">Categoría 8</a><br></br>
                            <a href="#collapse9" data-bs-toggle="collapse" data-bs-target="collapse9" aria-controls="collapse9">Categoría 9</a><br></br>
                            <a href="#collapse10" data-bs-toggle="collapse" data-bs-target="collapse10" aria-controls="collapse10">Categoría 10</a><br></br> */}
                        </div>
                    </div>
                </div>
                <div className='col-md-9 container-accord-items'>
                    <div id="todas-categorias" className='row accord-item accordion-collapse collapse show'>
                        {

                            tipoOrdenamiento === '1' ? 
                                relacionados.slice(0, 12).sort(ordenAlfabeticoAZ).map(product => (
                                    <div className='col-md-4 mb-3'>
                                        <CardProduct
                                            key={product.id}
                                            id={product.id}
                                            img={product.smallImg}
                                            title={product.name}
                                            titleColor={'black'}
                                            price={product.price}
                                            btnColor={'success'}
                                            borderColor={'#C4C4C4'}
                                        />
                                </div>
                                )) : tipoOrdenamiento === '2' ? 
                                relacionados.slice(0, 12).sort(ordenAlfabeticoZA).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                               </div>
                                )) : tipoOrdenamiento === '3' ? 
                                relacionados.slice(0, 12).sort(ordenPrecioMenorMayor).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                                    </div>
                                )) : tipoOrdenamiento === '4' ?
                                relacionados.slice(0, 12).sort(ordenPrecioMayorMenor).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                                    </div>
                                )) :
                                relacionados.slice(0, 12).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
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

                    <div id="cuidado-personal" className='row accord-item accordion-collapse collapse'>
                        {

                            tipoOrdenamiento === '1' ? 
                                relacionadosCP.slice(0, 12).sort(ordenAlfabeticoAZ).map(product => (
                                    <div className='col-md-4 mb-3'>
                                        <CardProduct
                                            key={product.id}
                                            id={product.id}
                                            img={product.smallImg}
                                            title={product.name}
                                            titleColor={'black'}
                                            price={product.price}
                                            btnColor={'success'}
                                            borderColor={'#C4C4C4'}
                                        />
                                </div>
                                )) : tipoOrdenamiento === '2' ? 
                                relacionadosCP.slice(0, 12).sort(ordenAlfabeticoZA).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                               </div>
                                )) : tipoOrdenamiento === '3' ? 
                                relacionadosCP.slice(0, 12).sort(ordenPrecioMenorMayor).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                                    </div>
                                )) : tipoOrdenamiento === '4' ?
                                relacionadosCP.slice(0, 12).sort(ordenPrecioMayorMenor).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                                    </div>
                                )) :
                                relacionadosCP.slice(0, 12).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
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

                    <div id="cuidado-infantil" className='row accord-item accordion-collapse collapse'>
                        {

                            tipoOrdenamiento === '1' ? 
                                relacionadosCI.slice(0, 12).sort(ordenAlfabeticoAZ).map(product => (
                                    <div className='col-md-4 mb-3'>
                                        <CardProduct
                                            key={product.id}
                                            id={product.id}
                                            img={product.smallImg}
                                            title={product.name}
                                            titleColor={'black'}
                                            price={product.price}
                                            btnColor={'success'}
                                            borderColor={'#C4C4C4'}
                                        />
                                </div>
                                )) : tipoOrdenamiento === '2' ? 
                                relacionadosCI.slice(0, 12).sort(ordenAlfabeticoZA).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                               </div>
                                )) : tipoOrdenamiento === '3' ? 
                                relacionadosCI.slice(0, 12).sort(ordenPrecioMenorMayor).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                                    </div>
                                )) : tipoOrdenamiento === '4' ?
                                relacionadosCI.slice(0, 12).sort(ordenPrecioMayorMenor).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                        img={product.smallImg}
                                        title={product.name}
                                        titleColor={'black'}
                                        price={product.price}
                                        btnColor={'success'}
                                        borderColor={'#C4C4C4'}
                                    />
                                    </div>
                                )) :
                                relacionadosCI.slice(0, 12).map(product => (
                                <div className='col-md-4 mb-3'>
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
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