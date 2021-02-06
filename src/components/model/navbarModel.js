import { ref } from 'vue'

export function popover () {
  // 通过 actions 属性来定义菜单选项
  const actions = [
    { text: '发起群聊', icon: 'chat' },
    { text: '添加好友', icon: 'manager' },
    { text: '扫一扫', icon: 'photo' },
    { text: '首付款', icon: 'alipay' },
    { text: '帮助反馈', icon: 'wechat-pay' }
  ]
  const offset = [8, 20]
  const showPopover = ref(false)

  /* const togglePopover = () => {
    showPopover.value = !showPopover.value
  } */

  const onSelect = (action) => {
    console.log(action)
  }


  return {
    actions,
    offset,
    showPopover,
    onSelect
  }
}