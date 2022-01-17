import { usuarios } from "../db/usuarios";

export const getUserByEmailAndPassword = (email, password) => {
    return usuarios.find(user => user.email === email && user.password === password);
}

export const isAuthenticated = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        return user;
    } else {
        return false;
    }
}

export const registerUser = (user) => {
    usuarios.push(user);
}