<template>
    <el-dialog title="修改密码" :visible='true' width="30%" :before-close="handleClose" >
        <div class="flex flex-middle">
            <label style="position:relative;top:-5px">旧密码:</label>
            <el-input class="el-input"  placeholder="请输入旧密码" prepend="123   " v-model="olderPwd" size="small" @blur="blurVal($event)"></el-input>
        </div>
        <div>
            <label>新密码:</label>
            <el-input class="el-input" placeholder="请输入新密码" v-model="newPwd" size="small" @blur="blurVal($event)"></el-input>
        </div>
        <div>
            <label>确认密码:</label>
            <el-input  placeholder="确认密码" v-model="subPwd" size="small" @blur="blurVal($event)"></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('cloneChangePwdModal')" size="small">取 消</el-button>
            <el-button type="primary" @click="submit" size="small">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
    data () {
        return {
            olderPwd : '',
            newPwd : '',
            subPwd : ''
        }
    },
    methods : {
        submit() {
            if(this.olderPwd == '' || this.newPwd == '' || this.subPwd == ''){
                this.$message.warning('输入框不能为空!');
                return;
            };
            if(this.newPwd !== this.subPwd){
                this.$message.warning('新密码两次输入不一致!');
                return;
            };
            if(this.newPwd == this.olderPwd){
                this.$message.warning('新密码与旧密码一致!');
                return;
            };
            if(this.olderPwd !== '' && this.newPwd !== '' && this.subPwd !== '' && this.newPwd == this.subPwd && this.newPwd !== this.olderPwd){
                this.$emit('cloneChangePwdModal')
            };
        },
        handleClose(){
            this.$emit('cloneChangePwdModal')
        },
        blurVal(event){
            if(event.target.value.length>6){
                this.$message.warning('密码最少为6位!')
                return;
            }
        }
    }
}
</script>
<style scoped>
    div{
        margin-bottom: 10px;
    }
    div label{
        display: inline-block;
        width: 60px;
        text-align: right;
        margin-right: 10px;
    }
    .el-input{
        width: 300px;
    }
</style>