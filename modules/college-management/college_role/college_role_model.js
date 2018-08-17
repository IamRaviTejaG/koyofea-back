import { query } from '../../../config/db'

export let college_role_model = {
  get_all: () => {
    let sql = `SELECT * FROM college_role`
    return query(sql, [])
  }
}
