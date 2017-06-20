
import Api from '../api'

export default {
	async getUserInfo(context) {
		let res = await Api.getUser();
		context.commit("setUser",res);
	},
}