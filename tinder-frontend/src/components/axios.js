import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-mern-stack.herokuapp.com/tinder-mern-stack",
});

export default instance;