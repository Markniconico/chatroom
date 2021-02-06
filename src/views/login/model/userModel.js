import { reactive } from 'vue'
import store from '@store/index.js'
import router from '@router/index.js'

export function login () {
  const rules = ({
    uPattern: [{ pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名格式不正确' }],
    pPattern: [{ pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '密码格式不正确' }]
  })

  const user = reactive({
    username: 'zhangsan',
    password: '123456'
  })

  const onSubmit = () => {
    store.dispatch('user/login', { ...user, role: 0 }).then(() => {
      const { redirect } = router.currentRoute.value.query
      redirect ? router.push(redirect) : router.push('/')
    })
  }


  return {
    rules,
    user,
    onSubmit
  }
}