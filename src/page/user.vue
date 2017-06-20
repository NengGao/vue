 <template>
    <div class="page">
        	<p>{{page}}</p>
        	<p>用户名 ：{{user.alias}}</p>
         	<p>邀请码 ：{{user.inviteCode}}</p>
         	<p>手机号 ：{{user.userPhone}}</p>
         	<p>余额 ：{{user.balance}}</p>
         	<p>头像 ：<img :src="user.userImage" alt="" /></p>
         	
    </div>
</template>

<script>
	
    import { mapActions } from 'vuex'

    export default {
        data(){
            return{
               page : 'user页',
               user :  this.$store.getters.getUserInfo
            }
        },
        methods:{
 
        },
        created(){
            
        }

    }
</script>
  
<style lang="scss" scoped>
   img{
   		width: 2rem;
   		border-radius:50%;
   }
</style>
