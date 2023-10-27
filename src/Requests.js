const api_key = '034b329da9a9f9e2cdcc710263e33442';
const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    requestTopRated :`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    requestTrending :`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=en-US`,
    // requestHorror :`https://api.themoviedb.org/3/horror/movie/day?api_key=${api_key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`, 
}
export default requests;