import React from 'react';
import { CardProduct } from '../ui/CardProduct';
import {Slideshow,Slide} from './Slideshow';
import imgslide from './of-banner.png';
import panel from './panel-1.png';
import { getProduct, getProductsByTipo } from '../../helpers/productOperations';

export const HomePage = () => {

    const generales = getProductsByTipo('general');
    const cuidados = getProductsByTipo('cuidado');
    const infantiles = getProductsByTipo('infantil');

    return (
        <React.Fragment>
            <Slideshow controles={false} autoplay={true} velocidad ="4000" intervalo="8000" >
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
                        <Slideshow>
                            {
                                <>
                                    <Slide>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={generales[0].id}
                                                        id={generales[0].id}
                                                        img={generales[0].smallImg}
                                                        title={generales[0].name}
                                                        titleColor={'#00B1A9'}
                                                        price={generales[0].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={generales[1].id}
                                                        id={generales[1].id}
                                                        img={generales[1].smallImg}
                                                        title={generales[1].name}
                                                        titleColor={'#00B1A9'}
                                                        price={generales[1].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={generales[2].id}   
                                                        id={generales[2].id}
                                                        img={generales[2].smallImg}
                                                        title={generales[2].name}
                                                        titleColor={'#00B1A9'}
                                                        price={generales[2].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={generales[3].id}
                                                        id={generales[3].id}
                                                        img={generales[3].smallImg}
                                                        title={generales[3].name}
                                                        titleColor={'#00B1A9'}
                                                        price={generales[3].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={generales[4].id}
                                                        id={generales[4].id}
                                                        img={generales[4].smallImg}
                                                        title={generales[4].name}
                                                        titleColor={'#00B1A9'}
                                                        price={generales[4].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={generales[5].id}   
                                                        id={generales[5].id}
                                                        img={generales[5].smallImg}
                                                        title={generales[5].name}
                                                        titleColor={'#00B1A9'}
                                                        price={generales[5].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </>
                            }
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
                        <p className='text-seccion pe-2'>Cuidado infantil</p>
                        <div className='bg-seccion2'></div>
                    </div>
                    <div className='mx-4 my-5'>
                    <Slideshow>
                            {
                                <>
                                    <Slide>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={cuidados[0].id}
                                                        id={cuidados[0].id}
                                                        img={cuidados[0].smallImg}
                                                        title={cuidados[0].name}
                                                        titleColor={'#00B1A9'}
                                                        price={cuidados[0].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={cuidados[1].id}
                                                        id={cuidados[1].id}
                                                        img={cuidados[1].smallImg}
                                                        title={cuidados[1].name}
                                                        titleColor={'#00B1A9'}
                                                        price={cuidados[1].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={cuidados[2].id}   
                                                        id={cuidados[2].id}
                                                        img={cuidados[2].smallImg}
                                                        title={cuidados[2].name}
                                                        titleColor={'#00B1A9'}
                                                        price={cuidados[2].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={cuidados[3].id}
                                                        id={cuidados[3].id}
                                                        img={cuidados[3].smallImg}
                                                        title={cuidados[3].name}
                                                        titleColor={'#00B1A9'}
                                                        price={cuidados[3].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={cuidados[4].id}
                                                        id={cuidados[4].id}
                                                        img={cuidados[4].smallImg}
                                                        title={cuidados[4].name}
                                                        titleColor={'#00B1A9'}
                                                        price={cuidados[4].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={cuidados[5].id}   
                                                        id={cuidados[5].id}
                                                        img={cuidados[5].smallImg}
                                                        title={cuidados[5].name}
                                                        titleColor={'#00B1A9'}
                                                        price={cuidados[5].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </>
                            }
                        </Slideshow>
                    </div>
                </section>

                <section className=' mt-3'>
                    <div className='d-flex'>
                        <div className='bg-seccion'></div>
                        <p className='pe-2 text-seccion'>Formas de pago</p>
                        <div className='bg-seccion2'></div>
                    </div>
                    <div>
                    <Slideshow>
                            {
                                <>
                                    <Slide>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={infantiles[0].id}
                                                        id={infantiles[0].id}
                                                        img={infantiles[0].smallImg}
                                                        title={infantiles[0].name}
                                                        titleColor={'#00B1A9'}
                                                        price={infantiles[0].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={infantiles[1].id}
                                                        id={infantiles[1].id}
                                                        img={infantiles[1].smallImg}
                                                        title={infantiles[1].name}
                                                        titleColor={'#00B1A9'}
                                                        price={infantiles[1].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={infantiles[2].id}   
                                                        id={infantiles[2].id}
                                                        img={infantiles[2].smallImg}
                                                        title={infantiles[2].name}
                                                        titleColor={'#00B1A9'}
                                                        price={infantiles[2].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={infantiles[3].id}
                                                        id={infantiles[3].id}
                                                        img={infantiles[3].smallImg}
                                                        title={infantiles[3].name}
                                                        titleColor={'#00B1A9'}
                                                        price={infantiles[3].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={infantiles[4].id}
                                                        id={infantiles[4].id}
                                                        img={infantiles[4].smallImg}
                                                        title={infantiles[4].name}
                                                        titleColor={'#00B1A9'}
                                                        price={infantiles[4].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                                <div className='col-md-4'>
                                                    <CardProduct
                                                        key={infantiles[5].id}   
                                                        id={infantiles[5].id}
                                                        img={infantiles[5].smallImg}
                                                        title={infantiles[5].name}
                                                        titleColor={'#00B1A9'}
                                                        price={infantiles[5].price}
                                                        btnColor={'danger'}
                                                        borderColor={'#000000'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </>
                            }
                        </Slideshow>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}
