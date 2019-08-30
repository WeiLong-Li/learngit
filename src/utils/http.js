import axios from 'axios';


axios.defaults.timeout = 8000;
axios.defaults.baseURL ='http://47.100.249.250:9091';
// axios.defaults.baseURL ='http://47.100.249.250:9099';


//http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // const token = getCookie('名称');
//     // config.data = JSON.stringify(config.data);
//     config.headers = {
//       'Content-Type':'application/x-www-form-urlencoded'
//     }
//     // if(token){
//     //   config.params = {'token':token}
//     // }
//     return config;
//   },
//   error => {
//     return Promise.reject(err);
//   }
// );


// //http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode ==2){
//       router.push({
//         path:"/login",
//         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 // export function post(url,params={}){
 //   return new Promise((resolve,reject) => {
 //     axios.post(url,{
 //      params:params
 //     })
 //          .then(response => {
 //            resolve(response.data);
 //          },err => {
 //            reject(err)
 //          })
 //   })
 // }