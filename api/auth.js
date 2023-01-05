import Client from './client'

const login = (email, password) => Client.post('/auth', {email, password});

const registration = (userinfo) => Client.post("/users", userinfo);

export default {
    login,
    registration
}