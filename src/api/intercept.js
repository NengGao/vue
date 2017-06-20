/**
 *  axio 是一个基于 promise 的 HTTP 库   
 *  基于 axio 的  http 拦截
 */
import axios from 'axios'
//
axios.defaults.baseURL = 'http://ws.wlwch.cn'
// 设置  请求头 Content-Type
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 超时时间
axios.defaults.timeout = 5000

// http请求拦截器
axios.interceptors.request.use(config => {
 	return config
}, error => {
	//发起请求失败
	//...
 	return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
 	return data
}, error => {
	// 未接收到服务器响应
	//...
 	return Promise.reject(error)
})
export default axios