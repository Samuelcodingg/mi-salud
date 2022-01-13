import { productos } from "../db/productos";


export const getProduct = (id) => {
    return productos.find(product => product.id === id);
}

export const getProductsByTipo = (tipo) => {
    return productos.filter(product => product.tipo === tipo);
}