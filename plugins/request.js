import axios from 'axios'

export const request = axios.create({
  baseURL: "https://conduit.productionready.io",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000
})

export default ({ store }) => {
  request.interceptors.request.use(function (config) {
    // Do something before request is sent
    const { user } = store.state
    if (user && user.token) {
<<<<<<< HEAD
      config.headers.Authorization = `Token ${user.token}`
=======
      config.headers.Authentication = `Token ${user.token}`
>>>>>>> 7b6547a9304045b2cf93b6a8f17395cc404359bd
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}