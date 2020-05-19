const {
  Op,
  BlogClassModel
} = require('../models/TableBlogRelationModel')
const CryptoAuth = require('../utils/crypto')
// 用户
class BlogClassServer {
  // 获取的用户
  async list(pageParmas, conditions) {
    let { user_id } = conditions
    let {pageSize, limitStart } = pageParmas
    let where = {}
    if (conditions) {
      if (user_id) {
        where['user_id']= conditions.user_id
      }
    }
    let _data = await BlogClassModel.findAndCountAll({
      where: where,
      limit: pageSize,
      offset: limitStart
    })
    return {
      list: _data.rows,
      count: _data.count
    }
  }
  // 添加用户
  async createUser(userInfo) {
    let user = await SysUserModel.create({
      nick_name: userInfo.nick_name,
      password: userInfo.password,
      email: userInfo.email,
      phone: userInfo.phone,
      avatar: userInfo.avatar,
      create_time: userInfo.create_time,
      update_id: userInfo.update_id,
    })
    let roles = await SysRoleModel.findAll({
      where: {
        role_id: userInfo.role_id
      }
    })
    let row = await user.addSys_roles(roles)
    return true
  }
  // 更新用户
  async updateUser(data) {
    let roles = await SysRoleModel.findAll({
      where: {
        role_id: data.role_id
      }
    })
    let user = await SysUserModel.findByPk(data.user_id) //  通过主键查询
    await user.update({
      nick_name: data.nick_name,
      password: CryptoAuth.encrypted(data.password), // 密码加密data.password,
      email: data.email,
      phone: data.phone,
      avatar: data.avatar,
      create_time: data.create_time,
      update_id: data.update_id,
    })
    let row = await user.setSys_roles(roles)
    return true
  }
  // 删除用户
  async deleteUser(user_id) {
    let row = await SysUserModel.destroy({
      where: {
        user_id: user_id
      }
    })
    return true
  }
}
module.exports = new BlogClassServer()