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
    console.log(e)
    console.log(!!e.detail.value.length)
    this.setData({
      isAgree: !!e.detail.value.length
    });
    console.log(this.data.isAgree)

  }
});