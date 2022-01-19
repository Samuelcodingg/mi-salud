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

export const getProductosCarrito = () => {
    const carrito = localStorage.getItem('carrito');

    if (carrito) {
        return JSON.parse(carrito);
    } else {
        return [];
    }
}

export const deleteProductoCarrito = (nombre) => {
    const carrito = localStorage.getItem('carrito');
    const carritoJSON = JSON.parse(carrito);
    const productos = carritoJSON.filter(producto => producto.nombre !== nombre);

    localStorage.setItem('carrito', JSON.stringify(productos));
}

export const addProductoCarrito = (producto) => {
    const carrito = localStorage.getItem('carrito');
    const carritoJSON = JSON.parse(carrito);
    carritoJSON.push(producto);

    localStorage.setItem('carrito', JSON.stringify(carritoJSON));
}