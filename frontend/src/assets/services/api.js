const API_KEY = "94c5d0693649ef5f2a28bcc31eb504f7";
const BASE_URL = "https://www.themoviedb.org/"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results

};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results

};