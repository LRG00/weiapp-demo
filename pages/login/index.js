//获取应用实例
const app = getApp()
let loadingMore = false
let lastScollTop = 0;
let lastRequestTime = 0;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    barBg: 'linear-gradient(45deg, #0081ff, #1cbbb4)',//#ff6600
    color: '#000',//#ffffff
    title: 'xiangqingye',
    hasUserInfo: false,

    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    list: [],
    hasMore: true,//列表是否有数据未加载
    page: 1,
    size: 8,//每页8条数据
    scrollYHeight: 30,//scroll-view高度
  },
  onLoad: function() {
    this.wxGetUserInfo();
},
			//第一授权获取用户信息===》按钮触发
			wxGetUserInfo() {
				wx.getUserInfo({
					provider: 'weixin',
					success: (infoRes) => {
            console.log(infoRes, 'infoResxxxx')
						this.nickName = infoRes.userInfo.nickName; //昵称
						this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
						this.iv = infoRes.iv;
						this.encryptedData = infoRes.encryptedData;
						this.updateUserInfo();//调用更新信息方法
						try {
							wx.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
							// this.login();
						} catch (e) {}
					},
					fail(res) {}
				});
			},

　　　　　　//登录
			login() {
				// wx.showLoading({
				// 		title: '登录中...'
				// });
				var that = this
				// 1.wx获取登录用户code
				wx.login({
						provider: 'weixin',
						success: function(loginRes) {
							that.code = loginRes.code;
							if (!that.isCanUse) {
								that.updateUserInfo();//调用更新信息方法
							
							}else{
								that.wxGetUserInfo()
							}
						},
				});
			},
		//向后台更新信息
    updateUserInfo() {
      wx.request({
          url:'https://30bb8cd2f8413532bc7a.myminapp.com/hserve/v2.0/login/email/' ,//服务器端地址
          data: {
          "email":"158097628@qq.com",
          "password":"123456"
          },
                    method: 'POST',
                    header: {
                        'content-type': 'application/json',
                        'X-Hydrogen-Client-ID': '30bb8cd2f8413532bc7a',
                    },
                    success: (res) => {
                          console.log(res);
                          
                        // if (res.data.state == "success") {
                        // 		wx.reLaunch({//信息更新成功后跳转到小程序首页
                        // 				url: '/pages/index/index'
                        // 		});
                        // }
                    }
                    
                });
            }
})