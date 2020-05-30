
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //CURRENT_USER_PHONE:'18815500755',//专业版
   CURRENT_USER_PHONE:'15705428474',//专业版 1111
  //  CURRENT_USER_PHONE:'13639489979',//专业版 1111
  //CURRENT_USER_PHONE:'16678183349',//企业版 1111
  // CURRENT_USER_PHONE:'18911111111',//普通用户
  // CURRENT_USER_PHONE:'18660400168',//普通用户
  // CURRENT_USER_PHONE:'17011111151',//普通用户

  //CURRENT_USER_PHONE:'12345678904',//个人版
  //CURRENT_USER_PHONE:'14966666666',//超级管理员
  //CURRENT_USER_PHONE:'17011111154',//超级管理员 代账版
  CURRENT_USER_PWD:'"b59c67bf196a4758191e42f76670ceba"',
  // CURRENT_USER_PWD:'"96e79218965eb72c92a549dd5a330112"',
})
