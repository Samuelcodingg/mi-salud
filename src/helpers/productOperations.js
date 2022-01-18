import { productos } from "../db/productos";


export const getProduct = (id) => {
    return productos.find(product => product.id === id);
}

export const getProductsByTipo = (tipo) => {
    return productos.filter(product => product.tipo === tipo);
}

export const getPrecioTotal = () => {
    let total = 0;
    const carrito = localStorage.getItem('carrito');

    if (carrito) {
        const carritoJSON = JSON.parse(carrito);
        carritoJSON.forEach(producto => {
            total += producto.precio;
        });
    }

    return total;
}