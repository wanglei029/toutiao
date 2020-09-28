module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      // 转化根元素基准值
      // 正常情况下按照设计稿来
      // 750宽的设计稿， 750/10=75
      // 375宽的设计稿， 375/10=37.5
      rootValue: 37.5,
      // 配置 需要转换的css属性 *所有的属性都要转换
      propList: ['*']
    }
  }
}
