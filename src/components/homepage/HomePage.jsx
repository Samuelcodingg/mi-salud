import React from 'react';
import { CarouselPanel } from './CarouselPanel';
import { CardProduct } from '../ui/CardProduct';
import { productos } from '../../db/productos';

export const HomePage = () => {
    return (
        <React.Fragment>
            <CarouselPanel/>
            <section>
                <h2>Compras Recientes</h2>
                
            </section>

            <section>
                <h2>Ultimas ofertas</h2>

            </section>
            <section>
                <h2>Cuidado infantil</h2>
            </section>
            <section>
                <h2>Formas de pago</h2>
            </section>
        </React.Fragment>
    )
}
