
//获取应用实例
const app = getApp()

Page(
  {
    data: {
      motto: 'Hello World',
      userInfo: {},
      title: '列表页',
      barBg: 'linear-gradient(45deg, #0081ff, #1cbbb4)',//#ff6600
      color: '#000',//#ffffff
      hasUserInfo: false,
    },
    onShow() {
      // 自定义tabbar 切换逻辑 不能删
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    },
    onLoad: function () {

    },
  })