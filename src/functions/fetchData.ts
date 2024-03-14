import axios from "axios"
import { API_KEY } from "../vite-env.d";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: API_KEY
}

const fetchData = async (url: string, config: object = {}) => {
  try {
    const response = await axios(url, { ...config });
    return response.data
  } catch (err) {
    console.error(err);
  }
}

export default fetchData