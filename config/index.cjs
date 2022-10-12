/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx10c2150115145e6e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3a5011258f045256007adba3298776ea',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '淦淦','饼饼',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opmfL5-i_Grqx2eS2556_78A9aBc','opmfL57r5HTRj9thqiI0fx-De3Ts',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'zocSCCP2OfRwz4W5TD41j0z1-ot_TdzbTjG8gLzBzXQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '淦宝', year: '1995', date: '02-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '饼宝', year: '1991', date: '02-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-15' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'fwSmmEmWUipU1c2V8IIzddFcjRwjhgG2tmmqD7aLLsE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opmfL54_p8YNnsMiDD3dpI2mg4Po',
    }
  ],

}

module.exports = USER_CONFIG

