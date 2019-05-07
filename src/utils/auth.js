/* eslint-disable no-unused-vars */
import http from './http'

export function getRecordAuth () {
  mpvue.getSetting({
    success (res) {
      if (!res.authSetting['scope.record']) {
        mpvue.authorize({
          scope: 'scope.record',
          success () {
            mpvue.startRecord()
          }
        })
      }
    }
  })
}
export function userLogin () {
  let userInfo = mpvue.getStorageSync('user_info') || {}
  mpvue.getSetting({
    success (res) {
      if (!res.authSetting['scope.userInfo']) {
        mpvue.authorize({
          scope: 'scope.userInfo',
          success () {
            mpvue.startRecord()
          }
        })
      }
    }
  })
}

// 将token存储在内存和localstroage中
export function setToken (expiredDay) {
  http.request({
    url: 'Welcome/getToken',
    needToken: false
  }).then(res => {
    if (res.status) {
      let token = res.data
      expiredDay = expiredDay || 1
      global.globalData.token = token
      mpvue.setStorageSync('token', token)

      let expiredTime = +new Date() + expiredDay * 24 * 60 * 60 * 1000
      global.globalData.expiredTime = expiredTime
      mpvue.setStorageSync('expiredTime', expiredTime)
    }
  })
}

// 获取有效的token
export function getValidToken (expiredDay) {
  expiredDay = expiredDay || 1
  let token = mpvue.getStorageSync('token')
  let expiredTime = mpvue.getStorageSync('expiredTime')
  // 当发现没有token 和expiredTime的时候则直接到auth进行login
  // if (!token && !expiredTime) {
  // 	return true
  // }
  let now = +new Date()

  if (now - expiredTime <= expiredDay * 24 * 60 * 60 * 1000) {
    global.globalData.token = token
    global.globalData.expiredTime = expiredTime
    return true
  } else {
    global.globalData.token = null
    global.globalData.expiredTime = 0
    return false
  }
}
export function setUserInfo (userInfo) {
  mpvue.setStorageSync('user_info', userInfo)
  global.globalData.userInfo = userInfo
  // if(userInfo.mobile && userInfo.nickName && userInfo.token){
  // 	global.globalData.hasLogin = true
  // }else{
  // 	global.globalData.hasLogin = false
  // }
}

// 获取用户信息
export function getUserInfo (settings) {
  let userInfo = mpvue.getStorageSync('user_info') || {}
  if (Object.keys(userInfo).length) {
    global.globalData.userInfo = userInfo
  } else {
    // if(settings && settings.isNeedAuth){
    // 	mpvue.navigateTo({
    // 		url: '/pages/auth/main'
    // 	})
    // }
  }
  return userInfo
}

export function setUserToken (expiredDay) {
  const that = this
  mpvue.getUserInfo({
    success (res) {
      let userInfo = getUserInfo()
      userInfo = Object.assign(res.userInfo, userInfo)
      http.request({
        url: 'User/userLogin',
        needToken: false,
        data: userInfo
      }).then(res => {
        if (res.status) {
          let token = res.data.token
          global.globalData.token = token
          mpvue.setStorageSync('token', token)

          let expiredTime = +new Date() + expiredDay * 24 * 60 * 60 * 1000
          global.globalData.expiredTime = expiredTime
          mpvue.setStorageSync('expiredTime', expiredTime)
        }
      })
    },
    fial (rea) {
      mpvue.openSetting({
        success (res) {
          console.log(res.authSetting)
        }
      })
    }
  })
}
export default {
  setToken,
  getValidToken,
  getUserInfo,
  setUserInfo,
  setUserToken
}
