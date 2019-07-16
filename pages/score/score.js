Page({
  data: {
    showTopTips: false,

    isAgree: false
  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: !that.data.isAgree
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },

  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
    console.log(this.data.isAgree)

  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
  }
});