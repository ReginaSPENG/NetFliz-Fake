import axios from "axios";

export default class Api {
  static async getApi(query, queryVariable) {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=e5693481ef000bfdd855a0f21ad39631&language=en-US`);
    if (res.status >= 200 && res.status <= 207) {
      return res;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
}
