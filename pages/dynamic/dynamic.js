// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHiddenToast: true,
    messages: [
      {
        groupName: "游戏",
        icon: "/images/game.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "音乐",
        icon: "/images/song.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "直播",
        icon: "/images/video.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "同城服务",
        icon: "/images/cityse.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "运动",
        icon: "/images/sport.png",
        rightImage: "/images/tip.png"
      },
      {
        groupName: "腾讯课堂",
        icon: "/images/class.png",
        rightImage: "/images/tip.png"
      }
    ],
    idx: 0
  },
  isShowToast: function () {
    this.setData({
      isHiddenToast: false
    })
  },
  toastChange: function () {
    this.setData({
      isHiddenToast: true
    })
  },
  toPage: function (event) {
    //点击跳转菜单，获取当前的index值
    var Ind = event.currentTarget.dataset.index;
    console.log(Ind);
    switch (Ind) {
      case 0://判断跳转页面
        wx.navigateTo({
          url: "/pages/dynamic/game/index"
        });
      case 1:
        wx.navigateTo({
          url: "/pages/dynamic/music/index"
        });
      case 2:
        wx.navigateTo({
          url: "/pages/dynamic/live/index"
        });
      case 3:
        wx.navigateTo({
          url: "/pages/dynamic/city/index"
        });
      case 4:
        wx.navigateTo({
          url: "/pages/dynamic/pe/index"
        });
      case 5:
        wx.navigateTo({
          url: "/pages/dynamic/tencentClass/index"
        });
    }
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