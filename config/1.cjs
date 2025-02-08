/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3a53bd00a74327b5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1a090554b88fad1d62df3175c878a86a',

  PROVINCE: '山东省',
  CITY: '济南市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '我',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofunt7FcVPEm6k3ntsf7rm_0Frl8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'cAgxNSGQFc6io6ptsMoLhj4dNJw4uLM81MQXOIpRK8Y',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-13',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '丹丹宝贝', year: '1999', date: '12-07',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          "type":"节日","name":"恋爱纪念日","date":"12-30","year":"2024"
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-12-30' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'yiHpG0dNrmF0K9foLVcEAqLTM1IzHH2FybkgrHGrXSA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofunt7FcVPEm6k3ntsf7rm_0Frl8',
    }
  ],

}

module.exports = USER_CONFIG
