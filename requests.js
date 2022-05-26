const APICLAVE = "e825c127b7e1ebdabbf78493aee5c7e6";

//todos los request de la aplicación
const requests = {
    fetchTrending: `/trending/all/week?api_keys=${APICLAVE}&language=en-US`,
    fetchHorror: `/genre/movie/list?api_keys=${APICLAVE}&language=en-US`,
    fetchLatest: `/movie/latest?api_keys=${APICLAVE}&language=en-US`,
}

export default requests;