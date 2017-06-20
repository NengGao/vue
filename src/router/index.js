import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

// 引入页面(异步加载)
const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const user = r => require.ensure([], () => r(require('../page/user')), 'user')

const router = new Router({

	routes: [{
        path: '/',
    	component: App, //顶层路由，对应 index.html
    	children: [ //二级路由。对应 App.vue
	        {
	            path: '/home',
	            component: home
	        },
	        {
	        	path : '/user',
	        	meta: { 
  					requireAuth: false
  				},
				component: user
	        },
	        {
	            path: '*',
	            redirect: '/home'
	        },
  		]
	}]
	
})




// 判断是否需要登录权限
router.beforeEach((to, from, next) => {

 	if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限

	 	if (localStorage.getItem('isLogin')) {// 判断是否登录
	  		next()
	 	} else {// 没登录则跳转到登录界面
	 		console.log("权限限制：" + to.fullPath);
	  		next({
	  			path: '/home',
	  			query: { redirect:to.fullPath }
	  		})
	 	}
	} else {
 		next()
	}

})

export default router