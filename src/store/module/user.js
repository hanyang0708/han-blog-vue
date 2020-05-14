import Vue from 'vue'

const user = {
    state: {
        token: '',
        userInfo: {}
    },
    mutations: {
        SET_TOKEN(state, value) {
            state.token = value;
            Vue.ls.set('token', value, 24 * 60 * 60 * 1000)
        },
        SET_USER_INFO(state, value) {
            state.userInfo = value;
            Vue.ls.set('userInfo', value, 24 * 60 * 60 * 1000)
        }
    },
    actions: {
        setToken({commit},value) {
            commit("SET_TOKEN",value);
        },
        setUserInfo({commit},value){
            commit("SET_USER_INFO",value);
        }
    },
}

export default user;