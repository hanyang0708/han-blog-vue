const user = {
    state: {
        token: '123'
    },
    mutations: {
        SET_TOKEN(state, value) {
            state.token = value;
        }
    },
    actions: {
        setToken({commit},value) {
            commit("SET_TOKEN",value);
        }
    },
}

export default user;