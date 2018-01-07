import router from './router'
import axios from 'axios'
import decode from 'jwt-decode';
// URL and endpoint constants
const API_URL = 'http://localhost:8000/'
const LOGIN_URL = API_URL + 'api-token-auth/'
const SIGNUP_URL = API_URL + 'rest-auth/register/'
const GETUSER_URL = API_URL + 'api/user/?format=json'

export default {

    // User object will let us check authentication status
    user: {
        _id: '',
        _cls: '',
        email: '',
        slug: '',
        name: '',
        password: '',
        estado: '',
        ciudad: '',
        direccion: '',
        apellido: '',
        intereses: [],
        genero: 0,
        edad: 0,
        telefono_contacto: 0,
        a_intereses: [],
        telefono: 0,
        seguidores: [],
        seguidos: [],
        notificaciones: [],
        modificado: { type: date },
        activo: true,
        userperfil: '',
        authenticated: false
    },
    correos: [],

    // Send a request to the login URL and save the returned JWT
    login(creds, redirect) {
        axios.post(LOGIN_URL, creds).then(response => {
            localStorage.setItem('id_token', response.data.id);
            localStorage.setItem('access_token', response.data.token);
            this.user.authenticated = true
            router.push(redirect);
        }).error((err) => console.log(err))
    },

    signup(creds, redirect) {
        axios.post(SIGNUP_URL, creds).then(response => {
            localStorage.setItem('id_token', response.data.id)
            localStorage.setItem('access_token', response.data.key)
            this.user.authenticated == true

            router.go(redirect);

        });
    },

    // Remueve el token al salir del sistema
    logout() {
        localStorage.removeItem('id_token')
        localStorage.removeItem('access_token')
        this.user.authenticated = false
        router.push('/')
    },

    getUser() {
        axios.get(GETUSER_URL).then(response => {
            this.user = this.response.data
            return this.user
        }).catch(error => {
            console.log(error);
        })
    },
    checkUser(data) {
        while (i < this.user.length) {
            this.correos[i] == this.user[i]
            i++;
        };
        return this.correos.indexOf(data);
    },
    checkAuth() {
        var jwt = localStorage.getItem('access_token');
        if (jwt) {
            this.user.authenticated = true;
            return true;
        } else {
            this.user.authenticated = false;
            return false;
        }
    },

    // The object to be passed as a header for authenticated requests
    getAuthHeader() {
        return localStorage.getItem('access_token');
    },
    getUser() {
        return this.user;
    },

}
export function requireAuth(to, from, next) {
    if (!checkAuth()) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        });
    } else {
        next();
    }
    export function requireUser(to, from, next) {
        if (!checkAuth()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    }