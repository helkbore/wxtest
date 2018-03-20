var list = require('../../../../data/word-list.js')
Page({
  data: {},
  onLoad: function(options) {

    var idx = Math.floor(Math.random() * 52) + 1
    // console.log('idx')
    // console.log(idx)
    var word = list.wordList[idx]

    this.setData({
      content: word.content,
      pron: word.pron,
      definition: word.definition,
      audio: word.audio
    })
  },

  // 不认识
  show: function () {
    this.setData({
      showNot: true
    })
  },

  // 下一个
  next: function() {
    this.setData({
      showNot: false
    })

    var idx = Math.floor(Math.random() * 52) + 1
    var word = list.wordList[idx]
    // console.log('word')
    // console.log(word)

    this.setData({
      content: word.content,
      pron: word.pron,
      definition: word.definition,
      audio: word.audio
    })
  },
  read: function() {
    /*
    console.log(this.data.audio)
    wx.playVoice({
      filePath: this.data.audio,
      success: function(res) {
        console.log('ok')
      },
      fail: function() {
        console.log('fail')
      },
      complete: function() {}
    })
    */
  }

});