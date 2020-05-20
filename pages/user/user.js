// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     userInfo:{
       nickName:""
     }
  },
  // 获取用户信息
  getUserInfo:function(e){
    console.log(e);
    // 将数据存在本地缓存中
    wx.setStorageSync("userInfo", e.detail.userInfo);
    // 存在 data 中
    this.setData({
      userInfo:e.detail.userInfo
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
    // 获取本地缓存数据
    let userInfo = wx.getStorageSync("userInfo");
    this.setData({
      userInfo
    })
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