const getters = {
    getToken: state => state.user.token,
    getUserId: state => state.user.userInfo.id,
}

export default getters