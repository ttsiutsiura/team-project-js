import axios from 'axios';

export default class NewAskServer {
  constructor() {
    this.api_key = `api_key=faab19b092cac6c59a97dec233a38f4d`;
    this.STORAGE_PAGINATION_TYPE = 'paginationType';
  }

  async fetchMovieRating(page = 1) {
    try {
      console.log('page '+page);
      this.BASEURL = `https://api.themoviedb.org/3/trending/movie/day?`;
      // const pageNum = Number(page);
      const ending = '&page='+page;
      console.log(ending);
      console.log(`${this.BASEURL}${this.api_key}${ending}`);
      const response = await axios.get(`${this.BASEURL}${this.api_key}${ending}`);
      localStorage.setItem(this.STORAGE_PAGINATION_TYPE, 'rating');
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchGenresId() {
    this.BASEURLGENRES = `https://api.themoviedb.org/3/genre/movie/list?`;
    try {
      const resultGenresId = await axios.get(
        `${this.BASEURLGENRES}${this.api_key}`
      );
      return resultGenresId.data.genres;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchSearchId(request, page = 1) {
    this.STORAGE_TOTAL_PAGES = 'totalPages';
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?${this.api_key}&language=en-US&page=${page}&include_adult=false&query=${request}`
      );
      localStorage.setItem(this.STORAGE_TOTAL_PAGES, response.data.total_pages);
      localStorage.setItem(this.STORAGE_PAGINATION_TYPE, 'seach');
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}
