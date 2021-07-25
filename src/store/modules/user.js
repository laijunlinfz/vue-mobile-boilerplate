import { loginAsync } from '@/service';
import { setToken } from '@/utils/sessionStorage';
import { USER_LOGIN } from '../mutationType';

const state = {
  name: '',
  nickName: '',
  avatarUrl: '',
  phone: '',
  gender: '',
  email: '',
  password: '',
  token: ''
};

const mutations = {
  [USER_LOGIN]: (state, data) => {
    state = Object.assign(state, data);
  }
};

const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      loginAsync(data)
        .then(result => {
          const { code, data } = result || {};
          const { user } = data || {};
          // if (code !== 0 && !user) {
          //   reject(new Error('Verification failed, please Login again.'));
          // }
          if (code === 0) {
            user.name = user.nickName;
            user.token = user.password;
            commit(USER_LOGIN, user);
            setToken(user.token);
          }
          resolve(result);
        })
        .catch(error => {
          console.error('loginAsync error ', error);
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
