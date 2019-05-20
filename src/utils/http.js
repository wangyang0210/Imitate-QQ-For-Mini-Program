/* eslint-disable no-return-assign */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint camelcase: "error" */
// let headers = {
// 	'Content-Type': 'application/x-www-form-urlencoded',
// };
import { getUserInfo } from './auth'
export let baseUrl = 'https://chat.wangyangyang.vip/api/chat/'
export let websocket_url = 'wss://chat.wangyangyang.vip/wss'
export function request (options) {
  let userInfo = global.globalData.userInfo
  let needToken = options.needToken != false
  return new Promise((resolve, reject) => {
    wx.getNetworkType({
      success (ress) {
        const networkType = ress.networkType
        if (networkType !== 'none') {
          if (userInfo && userInfo.id) {
            options.data.uid = userInfo.id
          }
          let show = options.showLoading === true
          if (show) {
            mpvue.showLoading()
          }
          let needGetUserInfo = options.needUserInfo !== false
          if (needGetUserInfo) {
          }
          mpvue.request({
            url: options.url.indexOf('http') > -1 ? options.url : baseUrl + options.url,
            data: options.data,
            method: options.method || 'POST',
            header: {
              'content-type': 'application/json'
            },
            success (res) {
              resolve(formatResponse(res))
              if (show) {
                mpvue.hideLoading()
              }
            }
          })
        } else {
          mpvue.showToast({
            icon: 'none',
            title: '网络连接失败，请检查网络后重试！'
          })
          reject('无网络')
        }
      }
    })
  })
}

function formatResponse (result) {
  let code = result.statusCode
  let msg = ''
  if (code === 200) {
    if (!result.data.status) {
      if (result.data && result.data.data && result.data.data.code === 10001) {
        mpvue.showToast({
          icon: 'none',
          title: result.data.msg
        })
        mpvue.removeStorageSync('user_info')
        mpvue.removeStorageSync('hasLogin')
        setTimeout(() => {
          mpvue.navigateTo({ url: '/pages/auth/main' })
        }, 1500)
      }
    }
    return result.data
  } else {
    return msg = '服务器异常'
  }
}
export function get_no_read_msg () {
  clearTimeout(global.globalData.read_message_settimeout)
  const id = global.globalData.userInfo.id
  const hasLogin = global.globalData.hasLogin
  wx.getNetworkType({
    success (res) {
      const networkType = res.networkType
      if (networkType != 'none') {
        if (hasLogin && id) {
          message_request({
            url: 'isRead',
            data: {
              toid: id
            }
          }).then(res => {
            let status = res.data.status
            if (status) {
              mpvue.showTabBarRedDot({
                index: 1
              })
              global.globalData.is_read = true
            } else {
              mpvue.hideTabBarRedDot({
                index: 1
              })
              global.globalData.is_read = false
            }
          })
        }
      }
    }
  })
  global.globalData.read_message_settimeout = setTimeout(() => {
    get_no_read_msg()
  }, 2000)
}

function message_request (options) {
  return new Promise((resolve, reject) => {
    mpvue.request({
      url: baseUrl + options.url,
      data: options.data,
      method: options.method || 'POST',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        resolve(res)
      }
    })
  })
}

function userLogin (userInfo) {
  let location = mpvue.getStorageSync('user_location')
  request({
    url: 'User/userLogin',
    data: {
      nickname: userInfo.nickName,
      sex: userInfo.gender,
      avatar: userInfo.avatarUrl,
      mobile: userInfo.mobile
    }
  }).then(res => {
    console.log(res)
  })
}

export default {
  request,
  baseUrl,
  websocket_url,
  get_no_read_msg
}
