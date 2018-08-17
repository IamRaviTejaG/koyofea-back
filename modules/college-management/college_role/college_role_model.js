import { query } from '../../../config/db'

export let collegeRoleModel = {
  get_all: () => {
    let sql = `SELECT * FROM college_role`
    return query(sql, [])
  }
}
