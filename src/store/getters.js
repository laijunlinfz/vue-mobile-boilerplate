const getters = {
  token: state => state.user.token,
  avatarUrl: state => state.user.avatarUrl,
  name: state => state.user.name
}

export default getters
