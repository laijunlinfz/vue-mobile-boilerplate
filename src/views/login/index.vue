<template>
  <div class="login-container">
    <van-form class="submit-form" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="state.username"
          name="手机号"
          label="手机号"
          placeholder="手机号"
        />
        <van-field
          v-model="state.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
        />
      </van-cell-group>
      <div style="margin: 1rem 0.8rem;">
        <van-button round block type="primary" size="small" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Form, Field, CellGroup, Button, Toast } from 'vant';
import { isPhone, md5 } from '@/utils';

export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Form.name]: Form,
    [CellGroup.name]: CellGroup
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      username: '',
      password: ''
    });

    const onSubmit = () => {
      if (!state.username) {
        Toast('请输入手机号码');
        return;
      }
      if (!isPhone(state.username)) {
        Toast('请输入正确的手机号码');
        return;
      }
      if (!state.password) {
        Toast('请输入密码');
        return;
      }
      const data = {
        username: state.username,
        password: md5(state.password)
      };
      store.dispatch('user/login', data).then(result => {
        const { code, msg = '登录异常' } = result || {};
        if (code === 0) {
          router.push({ path: '/' });
        } else {
          Toast(msg);
        }
      });
    };

    return { state, onSubmit };
  }
};

</script>

<style lang="less">
.login-container {
  width: 100%;
  display: flex;
  justify-items: center;
  .submit-form {
    width: 100%;
    margin-top: 50vh;
    transform: translateY(-50%);
  }
}

</style>
