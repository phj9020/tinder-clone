import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-mern-stack.herokuapp.com/"
})

export default instance;