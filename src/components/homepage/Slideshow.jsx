import React,{useRef,useEffect} from 'react';
import { ReactComponent as FlechaIzquierda } from './izquierda.svg';
import { ReactComponent as FlechaDerecha } from './derecha.svg';
import styled from 'styled-components';

const Slideshow = ({children, controles=true, autoplay=true, velocidad ="6000", intervalo="10000"}) => {
    
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente = () => {
        console.log(slideshow.current);
        if(slideshow.current.children.length > 0 ){
            const elemento1 = slideshow.current.children[0];

            slideshow.current.style.transition = `${velocidad}ms ease-out all`;

            const tamanoSlide =  slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;
            
            //fin de un evento
            const transicion = () =>{
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                
                slideshow.current.appendChild(elemento1);
                slideshow.current.removeEventListener('transitionend',transicion);
            }
            
            slideshow.current.addEventListener('transitionend',transicion);
        }
    
    }
    
    const anterior = () => {
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length -1;
            const ultimoElemento = slideshow.current.children[index];

            slideshow.current.insertBefore(ultimoElemento,slideshow.current.firstChild);
            
            
            slideshow.current.style.transition = 'none';
            const tamanoSlide =  slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;

            setTimeout (()=>{
                slideshow.current.style.transition = '${velocidad}ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            },30);

        }
        
    }

    useEffect(()=>{
        if(autoplay){
            intervaloSlideshow.current = setInterval(()=>{
                siguiente();
    
            },3000);
            //Apagamos el autoplay
            slideshow.current.addEventListener('mouseenter', ()=>{
                clearInterval(intervaloSlideshow.current);
            });
            //Prendemos el autoplay
            slideshow.current.addEventListener('mouseleave', ()=>{
                intervaloSlideshow.current = setInterval(()=>{
                    siguiente();
        
                },intervalo);
            });
        }
        
    },[autoplay,intervalo,siguiente])

    return (
        <ContenedorPrincipal>
            <ContenedorSlideshow ref={slideshow}>
                {children}
            </ContenedorSlideshow>
            {controles && <Controles>
                <Boton onClick={anterior}>
                    <FlechaIzquierda/>
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <FlechaDerecha/>
                </Boton>
            </Controles>}
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`
    overflow: hidden;
    position: relative;
`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    position: relative;
    img{
        width: 100%;
        vertical-align: top;
    }
`;

const TextoSlide = styled.div`
    background: rgba(0,0,0,0.5);
    color: #fff;
    width: 100%;
    padding: 10px 60px;
    text-align: cente;
    position: absolute;
    bottom:0;
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events:none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0,0,0,.2);
        path{
            fill: #fff;
        }
    }
    path{
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #ffff)' : 'drop-shadow(2px 0px 0px #ffff)'}
    }
    ${props => props.derecho ? 'right : 0' : 'left: 0'}
`;

export {Slideshow,Slide};