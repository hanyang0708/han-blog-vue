import Vue from 'vue'
import Storage from 'vue-ls';
import store from '@/store'

var options = {
    namespace: 'vuejs__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local', // storage name session, local, memory
};

Vue.use(Storage, options);

store.dispatch('setToken',Vue.ls.get('token'))
store.dispatch('setUserInfo',Vue.ls.get('userInfo'))