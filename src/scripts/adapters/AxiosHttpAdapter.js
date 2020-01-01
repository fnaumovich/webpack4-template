import axios from "axios";
const CancelToken = axios.CancelToken;
let cancel;

const BASE_URL = 'https://api.github.com/search/repositories';

class AxiosHttpAdapter {
  constructor() {
    this.axiosAdapter = axios.create({
      baseURL: BASE_URL,
      timeout: 30000,
    });
  }

  onSuccessHandler(response) {
    return {
      data: response.data,
      headers: response.headers,
      statusCode: response.status,
      statusText: response.statusText,
    };
  }

  get(path, params) {
    return this.axiosAdapter({
      method: 'GET',
      url: path,
      params,
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    })
    .then((result) => {
      if (cancel !== undefined) {
        cancel();
      }
      this.onSuccessHandler(result);
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  post(path, data) {
    return this.axiosAdapter({
      method: 'POST',
      url: path,
      data,
    })
    .then((result) => {
      cancel();
      this.onSuccessHandler(result);
    })
    .catch(function (thrown) {
      console.log(error)
    })
  }
}

export default new AxiosHttpAdapter();
