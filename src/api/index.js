//经过拦截处理过的 axios
import axios from './intercept'



export default {
	//发起一个异步请求
	getUser(){
		return new Promise((resolve, reject) => {
			axios.get('/user/login', {
			    params: {
			      openId : 'oJs9r055anXkO4A_8kbEmaKcWRZo',
			      loginType : 2
			    }
			})
			.then(function (response) {
				resolve(response.data)
			})
			.catch(function (error) {
			    reject(error)
			});
		})
	}
}