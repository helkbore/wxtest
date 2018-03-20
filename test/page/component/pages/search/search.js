Page({
  data: {},
  onLoad: function(options){
    // 生命周期函数--监听页面加载
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '', // 分享标题
      desc: '', // 分享描述
      path: '' // 分享路径
    }
  },

  // 当键盘输入时，触发input事件，event.detail = {value, cursor}，处理函数可以直接 return 一个字符串，将替换输入框的内容。
  word: function(e) {
    console.log('input 获取的单词');
    console.log(e.detail.value);

    if (e.detail.value) {
      this.setData({
        searchWord: e.detail.value
      });
    }
    
  },

  // 查询按钮
  search: function(e) {
    var that = this
    var content = this.data.searchWord
    console.log('word')
    console.log(content)
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + content,
      data: {},
      method: 'GET',
      success: function(res) {
        console.log('request success');
        console.log(res);

        var msg = res.data.msg;
        if (msg == 'success') {
          wx.navigateTo({
            url: './detail/detail?content=' + content,
            success: function(res) {},
            fail : function () {},
            complete: function () {}
          })

        } else {
          wx.showModal({
            title: '提示',
            content: '查不到该词',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          });
        }
      },

      fail : function () {},
      conplete: function() {}
    })

  },

  // 功能说明
  help: function () {
    wx.showModal({
      title: '提示',
      content: '输入单词后点击回车键即可查询',
      showCancel: false,
      success: function (res) {}
    })
  }

});