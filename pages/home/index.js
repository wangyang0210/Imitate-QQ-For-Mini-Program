// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: [
      {
        title: "我的电脑",
        url: "/images/icon.png",
        message: "你已在电脑登录，可传文件到电脑。",
        time: "21:15",
        count: 0
      },
      {
        title: "苗飒",
        url: "http://image.biaobaiju.com/uploads/20180122/15/1516607720-VjfGLMEusF.jpg",
        message: "跑哪去了,程虎一直在找你!",
        time: "15:15",
        count: 5
      },
      {
        title: "程虎",
        url: "http://www.ghost64.com/qqtupian/qqTxImg/2/04-074239_639.jpg",
        message: "我这都给你发了20多条消息,你人呢",
        time: "15:15",
        count: 22
      },
      {
        title: "一声问候",
        url: "/images/icon1.png",
        message: "朋友生日要到了，送个祝福吧",
        time: "14:23",
        count: 0
      },
      {
        title: "李铭",
        url: "http://img5.imgtn.bdimg.com/it/u=3267072752,680519625&fm=26&gp=0.jpg",
        message: "我的天呢,这个好厉害啊",
        time: "12:13",
        count: 1
      },
      {
        title: "李获滋",
        url: "http://img0.imgtn.bdimg.com/it/u=547708126,3106036586&fm=26&gp=0.jpg",
        message: "嗯,我在想想",
        time: "12:11",
        count: 0
      },
      {
        title: "妹子UI",
        url: "http://img1.imgtn.bdimg.com/it/u=1372367103,3235883858&fm=26&gp=0.jpg",
        message: "小哥哥,快来玩啊",
        time: "11:35",
        count: 0
      },
      {
        title: "小程序交流群",
        url: "http://img4.imgtn.bdimg.com/it/u=2767474686,2738119628&fm=26&gp=0.jpg",
        message: "好多更新啊",
        time: "08:23",
        count: 0
      },
      {
        title: "柔情似水",
        url: "http://img3.imgtn.bdimg.com/it/u=1275944039,1807186726&fm=26&gp=0.jpg",
        message: "给你看看这就是我的照片",
        time: "03:21",
        count: 5
      },
      {
        title: "PHP开发群",
        url: "http://img1.3lian.com/gif/more/11/201212/8f3762fb4d791410ec970baa2641344d.jpg",
        message: "拍黄片嘛,老弟",
        time: "03:08",
        count: 98
      },
      {
        title: "同城交友群",
        url: "http://img2.imgtn.bdimg.com/it/u=698533895,3874563739&fm=26&gp=0.jpg",
        message: "现在python,go挺火啊",
        time: "02:45",
        count: 0
      },
      {
        title: "小程序",
        url: "http://img3.imgtn.bdimg.com/it/u=353315455,3453002870&fm=26&gp=0.jpg",
        message: "老师的直播开始了,快来学习啊",
        time: "00:24",
        count: 2
      }
    ]
  },
  bindfocus: function () {
    this.setData({
      focus: true
    })
    this.setData({
      isShowView: false
    })
  },
  bindblur: function () {

    this.setData({
      focus: false
    })
    this.setData({
      isShowView: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})