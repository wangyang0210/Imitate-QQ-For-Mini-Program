/* eslint-disable no-unused-vars */
import { getUserInfo } from './auth.js'
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  console.log(date)
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('-')
  const t2 = [hour, minute].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

// 设置底部tabbar
// export function setTabbar (type) {
//   let tabBarItems = []
//   if (type == 1) {
//     tabBarItems = [{
//       'text': '消息',
//       'pagePath': 'pages/card/main',
//       'iconPath': 'static/tabs/message.png',
//       'selectedIconPath': 'static/tabs/message-active.png'
//     }, {
//       'text': '客户',
//       'pagePath': 'pages/market/main',
//       'iconPath': 'static/tabs/customer.png',
//       'selectedIconPath': 'static/tabs/customer-active.png'
//     }, {
//       'text': '个人中心',
//       'pagePath': 'pages/center/main',
//       'iconPath': 'static/tabs/emp.png',
//       'selectedIconPath': 'static/tabs/emp-active.png'
//     }]
//   } else if (type == 0) {
//     [{
//       'text': '名片',
//       'pagePath': 'pages/card/main',
//       'iconPath': 'static/tabs/card.png',
//       'selectedIconPath': 'static/tabs/card-active.png'
//     }, {
//       'text': '保险超市',
//       'pagePath': 'pages/market/main',
//       'iconPath': 'static/tabs/market.png',
//       'selectedIconPath': 'static/tabs/market-active.png'
//     }, {
//       'text': '会员中心',
//       'pagePath': 'pages/center/main',
//       'iconPath': 'static/tabs/center.png',
//       'selectedIconPath': 'static/tabs/center-active.png'
//     }]
//   }
//   tabBarItems.forEach((item, index) => {
//     wx.setTabBarItem({
//       index: index + 1,
//       text: item.text,
//       iconPath: item.iconPath,
//       selectedIconPath: item.selectedIconPath
//     })
//   })
// }

/* 去掉首尾空格 */
export function trimSpace (str) {
  return str.replace(/^\s+/g, '').replace(/\s+$/g, '')
}

export function formatMobileNum (mobileNum) {
  var collapsedNum = mobileNum.replace(/[^0-9]/ig, '')
  var subNum = collapsedNum.substr(0, 11)
  var length = subNum.length
  var mobileNumToDisplay
  if (length >= 4 && length < 8) {
    var first4 = subNum.substr(0, 3) + ' '
    mobileNumToDisplay = subNum.replace(/^[0-9]{3}/, first4)
  } else if (length >= 8) {
    var first9 = subNum.substr(0, 3) + ' ' + subNum.substr(3, 4) + ' '
    mobileNumToDisplay = subNum.replace(/^[0-9]{7}/, first9)
  } else {
    mobileNumToDisplay = subNum
  }
  return mobileNumToDisplay
}

// 验证手机号码是否合法
export function validateMobile (mobile) {
  var mobile = mobile.replace(/\s/g, '')
  if (!(/^(1[3-9][0-9])[0-9]{8}$/.test(mobile))) {
    return false
  } else {
    return true
  }
}

export function validateCarriage (carriage) {
  var carriage = carriage.replace(/\s/g, '')
  if (!(/^[a-zA-Z0-9]{17}$/.test(carriage))) {
    return false
  } else {
    return true
  }
}

export function validateMotor (motor) {
  var motor = motor.replace(/\s/g, '')
  if (!(/^[a-zA-Z0-9]{8}$/.test(motor))) {
    return false
  } else {
    return true
  }
}

export function getQuery () {
  /* 获取当前路由栈数组 */
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const options = currentPage.options
  return options
}
export default {
  formatNumber,
  formatTime,
  //   setTabbar,
  trimSpace,
  formatMobileNum,
  validateMobile,
  getQuery,
  validateCarriage,
  validateMotor
}
