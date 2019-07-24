//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    barBg: 'linear-gradient(45deg, #0081ff, #1cbbb4)',//#ff6600
    color: '#000',//#ffffff
    title: '后台',
    hasUserInfo: false,
  },
  backEvent(e) {
    // 这里可以写点击返回按钮相关的业务逻辑，下面逻辑提供参考
    console.log('dsa')
    let self = this;
    wx.showModal({
      title: '提示，触发返回按钮事件',
      content: '确定要退出当前页面吗？',
      success(res) {
        res.confirm && self.selectComponent('#navigationBar').runBack();//这里之所以调用了组件内部的返回上一页的方法，因为里面有判断逻辑，不想调用可以自行处理
      }
    })
  },
  onShow () {
    // 自定义tabbar 切换逻辑 不能删
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  goLogin: function(event) {
    console.log(event)
    wx.navigateTo({url: '/pages/login/index'})
  },
  onLoad: function() {

  },
})