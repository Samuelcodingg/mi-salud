import React,{useState,useEffect} from 'react';
import { CardProduct } from '../ui/CardProduct';
import {Slideshow,Slide} from './Slideshow';
import imgslide from './of-banner.png';
import panel from './panel-1.png';
import imgvisa from './visa.png';
import imgmaster from './logos_mastercard.png';
import imgamer from './fontisto_american-express.png';
import imgdiners from './logos_dinersclub.png';
import { getProductsByTipo } from '../../helpers/productOperations';
import { productos } from '../../db/productos';

export const HomePage = () => {

    const [relacionados, setRelacionados] = useState([]);
    const [relacionadosCI, setRelacionadosCI] = useState([]);
    
    useEffect(()=>{
        const relacionados = productos;
        setRelacionados(relacionados);

        const relacionadosCI = getProductsByTipo('infantil');
        setRelacionadosCI(relacionadosCI);
    },[]);


    return (
        <React.Fragment>
            <Slideshow controles={false} autoplay={true} velocidad ="10000" intervalo="8000" >
                <Slide>
                    <a href='#'>
                        <img src={panel} alt="" />
                    </a>
                </Slide>
                <Slide>
                    <a href='#'>
                        <img src={panel} alt="" />
                    </a>
                </Slide>
            </Slideshow>
            <div className='px-5'>
                <section className='mt-5'>
                    <div className='d-flex'>
                        <div className='bg-seccion'></div>
                        <p className='text-seccion pe-2'>Compras recientes</p>
                        <div className='bg-seccion2'></div>
                    </div>
                    <div className='mx-4 my-5'>

                        <Slideshow controles={true} autoplay={false} velocidad ="4000" intervalo="8000">
                            <Slide className='d-flex justify-content-around'>
                                {
                                    relacionados.slice(0, 4).map(product => (
                                        <div>
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
                            </Slide>
                            <Slide className='d-flex justify-content-around'>
                                {
                                    relacionados.slice(0, 4).map(product => (
                                        <div>
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
                            </Slide>
                        </Slideshow>
                    </div>
                </section>

                <section className='mt-3'>
                    <div className='d-flex'>
                        <div className='bg-seccion'></div>
                        <p className='text-seccion pe-2'>Ultimas ofertas</p>
                        <div className='bg-seccion2'></div>
                    </div>

                    <div className='mx-4 my-5'>
                        <Slideshow>
                            <Slide>
                                <a href="#">
                                    <img src={imgslide} alt="" />
                                </a>
                            </Slide>
                            <Slide>
                                <a href="#">
                                    <img src={imgslide} alt="" />
                                </a>
                            </Slide>
                            <Slide>
                                <a href="#">
                                    <img src={imgslide} alt="" />
                                </a>
                            </Slide>
                        </Slideshow>
                    </div>
                </section>
                <section className=' mt-3'>
                    <div className='d-flex'>
                        <div className='bg-seccion'></div>
                        <p className='text-seccion pe-1'>Cuidado infantil</p>
                        <div className='bg-seccion2'></div>
                    </div>
                    <div className='mx-4 my-5'>
                    <Slideshow controles={true} autoplay={false} velocidad ="4000" intervalo="8000">
                            <Slide className='d-flex justify-content-around'>
                                {
                                    relacionadosCI.slice(0, 4).map(product => (
                                        <div>
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
                            </Slide>
                            <Slide className='d-flex justify-content-around'>
                                {
                                    relacionadosCI.slice(0, 4).map(product => (
                                        <div>
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
                            </Slide>
                        </Slideshow>
                    </div>
                </section>



                <section className='my-5'>
                    <div className='d-flex px-5 justify-content-around align-items-center '>
                        <p >Formas de pago</p>
                        <img src={imgvisa} alt="" />
                        <img src={imgmaster} alt="" />
                        <img src={imgamer} alt="" />
                        <img src={imgdiners} alt="" />

                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}
