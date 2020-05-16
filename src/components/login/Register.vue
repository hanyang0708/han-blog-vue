<template>
    <div class="content">
        <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm">
            <el-form-item label="用户名" prop="userName" style="margin-bottom:10px">
                <el-input type="text" v-model="registerForm.userName" size="small" clearable></el-input>
            </el-form-item>

            <el-form-item label="昵称" prop="nickName" style="margin-bottom:10px">
                <el-input type="text" v-model="registerForm.nickName" size="small" clearable></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="userPwd" style="margin-bottom:10px">
                <el-input type="password" v-model="registerForm.userPwd" size="small" clearable></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="confirmPwd">
                <el-input type="password" v-model="registerForm.confirmPwd" size="small" clearable></el-input>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" class="width-100" @click="onRegisterClick">注册</el-button>
        </div>
    </div>
</template>

<script>
import { userService } from '@/api'

export default {
    data() {
        return {
            registerForm: {
                userName: '',
                userPwd: '',
                nickName: '',
                confirmPwd: '',
            },
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                userPwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                nickName: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                ],
                confirmPwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        onRegisterClick() {
            let userName = this.registerForm.userName.trim();
            let userPwd = this.registerForm.userPwd.trim();
            let nickName = this.registerForm.nickName.trim();
            let confirmPwd = this.registerForm.confirmPwd.trim();
            if(userPwd !== confirmPwd){
                this.$message.warning('两次密码不一致哦，请亲重新输入呀')
                return
            }
            if(userName=='' || userPwd == '' || nickName == ""){
                this.$message.warning('用户名、密码、昵称不能为空或空格！')
                return
            }

            userService.register({
                userName,
                userPwd,
                nickName,
            }).then(res=>{
                this.$message.success('注册成功！快快登录吧！');
                this.$emit('success');
            }).catch(err=>{
                console.log(err)
                this.$message.error(err.res.message);
            })
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