

const SysRoleServer = require('../server/SysRoleServer')
const SysOperationServer = require('../server/SysOperationServer')

const { offsetPage } = require('../utils/offsetPage')
class SysOperationController {
  async list (req, res) {
    let userid = req.userInfo.user_id // 获取存在通过token校验的用户
    let { pageParams, conditions } = offsetPage(req.query)
    let roleList = await SysRoleServer.findRoles(userid) // 用户角色关联
    let isSuperManage = roleList.some(it =>  it.role_id === 1) // 超级管理员 
    let _data = await SysOperationServer.list(pageParams,  Object.assign({ user_id: isSuperManage ? '' : userid }, conditions))
    res.R.ok({
      list: _data.list,
      totalCount: _data.count,
      currentPage: pageParams.page,
      pageSize: pageParams.pageSize
    })
  }
}
module.exports = new SysOperationController()