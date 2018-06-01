import axios from 'axios';

// 请求基础地址
axios.defaults.url = "http://192.168.13.103:8888";

// 请求信息
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

// 可以设置拦截器
//http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         //		if(!(config.url.indexOf('/userinfo/login') >= 0 || config.url.indexOf('/userinfo/register') >= 0 || config.url.indexOf('/userinfo/retrieve') >= 0 || config.url.indexOf('register') >= 0 || config.url.indexOf('userinfo/code') >= 0)) {
//         if (!config.headers.Authorization) {
//             if (Tools.GetCookie('Authorization')) {
//                 config.headers.Authorization = Tools.GetCookie('Authorization');
//                 axios.defaults.headers['Authorization'] = Tools.GetCookie('Authorization');
//             }
//         }
//         //console.log('config.headers.Authorization', config.headers.Authorization)
//         //		console.log(axios.defaults.headers['Authorization'])
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });

    // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         if (response.data.message === '登陆信息过期，请重新登录') {
//             Tools.CleanCookie('userid'),
//                 Tools.CleanCookie('username'),
//                 Tools.CleanCookie('Authorization'),
//                 router.replace({
//                     name: 'Login',
//                     params: { logout: 1 },
//                     //					query: { redirect: router.currentRoute.fullPath }
//                 })
//             return response;
//         } else if (response.data.message === '该账号已在其他地点登陆') {

//             Tools.CleanCookie('userid'),
//                 Tools.CleanCookie('username'),
//                 Tools.CleanCookie('Authorization'),
//                 router.replace({
//                     name: 'Login',
//                     params: { logout: 2 },
//                     //					query: { redirect: router.currentRoute.fullPath }
//                 })
//             return response;
//         } else {
//             return response;
//         }
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 402:
//                     // 401 清除token信息并跳转到登录页面
//                     if (error.response.data.message === 'Authorization header不存在或者无效' || error.response.data.message === 'token无效或者过期了') {
//                         router.replace({
//                                 name: 'Login',
//                                 params: { logout: 1 },
//                                 query: { redirect: router.currentRoute.fullPath }
//                             }),
//                             Tools.CleanCookie()
//                     }
//             }
//         }
//         // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//         //		return Promise.reject(error.message)
//     });

export default axios;