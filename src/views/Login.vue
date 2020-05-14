<template>
    <div class="height-100 flex flex-column">
        <div class="title">
            <h1 class="logo theme-color">Han's Blog</h1>
        </div>
        <div class="flex-1 height-0 flex flex-center">
            <div>
                <el-card style="width:500px">
                    <el-tabs :stretch='true' v-model='tabValue'>
                        <el-tab-pane label="登录" name='login'>
                            <transition name="el-zoom-in-center">
                                <Login v-show="tabValue == 'login'"/>
                            </transition>
                        </el-tab-pane>

                        <el-tab-pane label="注册" name='register'>
                            <transition name="el-zoom-in-center">
                                <Register v-show="tabValue == 'register'" @success='regSucCallBack'/>
                            </transition>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import Login from '@/components/login/Login';
import Register from '@/components/login/Register';

export default {
    data() {
        return {
            tabValue: 'login'
        }
    },
    methods: {
        regSucCallBack() {
            this.tabValue = 'login';
        }
    },
    components: {
        Login,
        Register,
    }
}
</script>

<style scoped>
    .title {
        height: 150px;
        overflow: hidden;
        padding: 0px 200px;
        overflow: hidden;
    }
    .logo {
        margin-top: 50px;
        font-size: 35px;
        font-weight: bolder;
    }
</style>