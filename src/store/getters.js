const getters = {
    getToken: state => state.user.token,
    getUserId: state => state.user.userInfo.id,
    getUserInfo: state => state.user.userInfo,
}

export default getters