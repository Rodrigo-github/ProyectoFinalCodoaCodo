import axios from "./axios";

const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3",
});

/*
instance.get('/ejemplo');

se transforma en

https://api.themoviedb.org/3/ejemplo
*/

export default instance;