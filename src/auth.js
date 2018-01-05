import router from './router'
import axios from 'axios'
import decode from 'jwt-decode';
// URL and endpoint constants
const API_URL = 'http://localhost:8000/'
const LOGIN_URL = API_URL + 'api-token-auth/'
const SIGNUP_URL = API_URL + 'rest-auth/register/'


function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
export default {

    // User object will let us check authentication status
    user: {
        authenticated: false
    },

    // Send a request to the login URL and save the returned JWT
    login(creds, redirect) {
        axios.post(LOGIN_URL, creds).then(response => {
            localStorage.setItem('id_token', response.data.id);
            localStorage.setItem('access_token', response.data.token);
            this.user.authenticated = true,
                // Redirect to a specified route
                router.go('/principal');

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

    // To log out, we just need to remove the token
    logout() {
        localStorage.removeItem('id_token')
        localStorage.removeItem('access_token')
        this.user.authenticated = false
    },

    checkAuth() {
        var jwt = localStorage.getItem('id_token')
        if (jwt) {
            this.user.authenticated = true
        } else {
            this.user.authenticated = false
        }
    },

    // The object to be passed as a header for authenticated requests
    getAuthHeader() {
        return localStorage.getItem('access_token');
    },
    getUser() {
        return this.user;
    }

}