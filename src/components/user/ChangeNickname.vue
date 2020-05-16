<template>
    <el-dialog title="修改昵称" :visible='true' width="30%" :before-close="handleClose">
        <el-input  placeholder="请输入新昵称" v-model="nickName"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('cloneChangeNickModal')">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
import { userService, } from '@/api'
export default {
    data() {
        return {
            nickName : '',
        };
    },
    methods: {
        submit() {
            let nickName = this.nickName.trim();
            if(nickName == ''){
                this.$message.warning('昵称不能为空！');
                return 
            }
            userService.uploadNickName({
                nickName,
                id: this.$store.getters.getUserInfo.id
            }).then(res=>{
                this.$store.dispatch('setUserInfo',res.data);
                this.$message.success('修改成功');
            }).catch(err=>{
                this.$message.error('修改失败，请稍后重试');
            })
            this.$emit('cloneChangeNickModal');
        },
        handleClose() {
            this.$emit('cloneChangeNickModal');
        }
    }
};
</script>
<style scoped>
</style>