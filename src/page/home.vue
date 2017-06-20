 <template>
    <div class="page">
    	<p>这是 {{user.alias}} 的主页</p>
    	<p><router-link tag="a" to="/user">去user</router-link></p>
    </div>
</template>

<script>
	import { mapActions } from 'vuex'
	import commonFn from '@script/commonFn.js'
    

    export default {
        data(){
            return{
               
            }
        },
        computed: {
        	user :  function(){
        		return this.$store.getters.getUserInfo
        	}
        },
        methods:{
            ...mapActions([
                'getUserInfo'
            ])
        },
        created(){
        	// 调用 common 方法示例
        	commonFn.setStore("home",'ok');
            this.getUserInfo()
        }

    }
</script>
  
<style lang="scss" scoped>
	.page{
		p{
			width: 100%;
			line-height: 4rem;
			text-align: center;
			font-size: 18px;
			a{
		    	color: #ff3333;
		    }
	    }
	}

</style>
