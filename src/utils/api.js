import axios from "axios";

axios.defaults.baseURL = "https://api.github.com";
axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";

export const getMethod = (path, config) => {
  return axios.get(path, config);
};

// import axios from 'axios';

// axios.defaults.baseURL = 'https://v1';
// axios.defaults.headers.post['Content-Type'] = 'am/json';

// export default axios;
