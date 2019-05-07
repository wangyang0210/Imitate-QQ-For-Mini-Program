/* eslint-disable no-undef */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable handle-callback-err */

import { baseUrl, websocket_url, api_url } from './http.js'

let webSocketTask = null, open_socket = false
let userInfo = mpvue.getStorageSync('user_info')
let fromid = userInfo.id
let user_type = userInfo.user_type
export function initWebSocket () {
  webSocketTask = mpvue.connectSocket({
    url: websocket_url,
    success: function (res) {
      console.log(res)
    },
    fail: function (fail) {
      console.log(fail)
    }
  })

  webSocketTask.onOpen(() => {
    open_socket = true
  })

  webSocketTask.onClose(() => {
    open_socket = false
    initWebSocket()
  })

  webSocketTask.onError(error => {
    open_socket = false
    initWebSocket()
  })

  // 监听服务器推送消息
  webSocketTask.onMessage(message => {
    try {
      let data = JSON.parse(message.data)
      let message_datas = []
      // message_datas = global.globalData.socket_messages
      let type = data.type
      if (type === 'init') {
        let bind = {}
        bind.fromid = fromid
        bind.type = 'bind'
        sendMessage(bind)
      } else if (['text', 'img', 'voice'].indexOf(type) > -1) {
        let currentPage = getCurrentPages()[getCurrentPages().length - 1].route
        console.log(currentPage)
        if (currentPage !== 'pages/chat/main') {
          mpvue.showTabBarRedDot({
            index: 1
          })
          global.globalData.hasNoRead = true
        }
      }
    } catch (e) {
      console.log(e)
    }
  })

  global.globalData.webSocketTask = webSocketTask
}

export function sendMessage (message) {
  webSocketTask.send({
    data: JSON.stringify(message),
    success: function (res) {
      console.log(res)
    },
    fail: function (fail) {
      console.log(fail)
    }
  })
}

export default {
  initWebSocket,
  sendMessage
}
