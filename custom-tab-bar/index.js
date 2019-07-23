Component({
  data: {
    selected: 1,
    color: "#aaaaaa",
    selectedColor: "#39b54a",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/list.png",
      selectedIconPath: "/images/list-select.png",
      text: "列表"
    }, {
      pagePath: "/pages/admin/index",
        iconPath: "/images/admin.png",
        selectedIconPath: "/images/admin-select.png",
      text: "后台"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      var that = this
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      that.setData({
        selected: data.index
      })
    }
  }
})