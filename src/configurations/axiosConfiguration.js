import axios from 'axios';

const token = window.localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token; 
} 

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // console.log('original request:', error.config);
    // console.log('response error:', error);
    const originalRequest = error.config;
    
    if (error.status === 401 && originalRequest.url.indexOf('api') > -1 && !originalRequest._retry) {
      //an API request that failed because of unauthorized
      originalRequest._retry = true;
      
      const refreshToken = window.localStorage.getItem('refreshToken');
      return axios.post('http://localhost:3471/auth/refresh', {refreshToken})
        .then(({data}) => {
          window.localStorage.setItem('token', data.token);
          window.localStorage.setItem('refreshToken', data.refreshToken);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
          originalRequest.headers['Authorization'] = 'Bearer ' + data.token;
          return axios(originalRequest);
        }); 
    }
    
    return Promise.reject(error);
  });
