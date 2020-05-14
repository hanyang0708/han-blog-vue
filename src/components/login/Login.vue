<template>
    <div class="content">
        <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm">
            <el-form-item label="用户名" prop="userName" style="margin-bottom:10px">
                <el-input type="text" v-model="loginForm.userName" size="small" clearable></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="userPwd">
                <el-input type="password" v-model="loginForm.userPwd" size="small" clearable :minlength='6'></el-input>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" class="width-100" @click="onLoginClick">登录</el-button>
        </div>
    </div>
</template>

<script>
import { userService } from '@/api'

export default {
    data() {
        return {
            loginForm: {
                userName: '',
                userPwd: ''
            },
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                userPwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        onLoginClick() {
            userService.login({
                userName: this.loginForm.userName,
                userPwd: this.loginForm.userPwd
            }).then(res=>{
                console.log(res);
                this.$message.success('登录成功');
                this.$store.dispatch('setToken',res.data.token);
                this.$store.dispatch('setUserInfo',res.data);
                this.$router.push({path: '/'});
            }).catch(err=>{
                console.log(err)
                this.$message.error(err.res.message);
            })
            return
            
        }
    }
}
</script>

<style scoped>
    .content {
        padding: 0px 30px;
        padding-bottom: 40px;
    }
</style>