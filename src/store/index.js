import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	user : '',    // 用户信息
	footer : ''   // 公用 footer
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})