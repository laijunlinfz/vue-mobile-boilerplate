import { loginAsync } from '@/service';
import { VUE2_TEST } from '../mutationType';

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
  [VUE2_TEST]: (state, data) => {
    state = Object.assign(state, data);
  }
};

const actions = {
  loginVue2({ commit }, data) {
    return new Promise((resolve, reject) => {
      loginAsync(data)
        .then(result => {
          const { code, data } = result || {};
          const { user } = data || {};
          if (code !== 0 && !user) {
            reject(new Error('Verification failed, please Login again.'));
          } else {
            user.name = user.nickName;
            user.token = user.password;
            commit(VUE2_TEST, user);
            resolve(result);
          }
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

// {
//     "code": 0,
//     "data": {
//         "user": {
//             "updateAt": "Invalid date",
//             "createAt": "Invalid date",
//             "id": 1,
//             "nickName": "Lin",
//             "avatarUrl": null,
//             "openid": "1",
//             "unionid": "1",
//             "city": "fuzhou",
//             "province": "fujian",
//             "country": "china",
//             "language": "zn",
//             "address": null,
//             "phone": "17605030380",
//             "email": "993700855@qq.com",
//             "realName": null,
//             "gender": null,
//             "type": 1,
//             "password": "724134369a0199c490c16b9c2c813b2f"
//         }
//     },
//     "msg": "success"
// }
