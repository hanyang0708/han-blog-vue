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
            this.$message.success('注册成功！快快登录吧！');
            this.$emit('success');
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