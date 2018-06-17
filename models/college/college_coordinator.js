import { query } from "../../config/db"

export let college_coordinator_model = {
  // get_all for college coordinators is an optional route (commented out for privacy),
  // and can be used in case required.

  // get_all: () => {
  //   let sql = 'SELECT * FROM `college_coordinator`'
  //   query(sql).then((result) => {
  //     console.log(result)
  //     return result
  //   }).catch((err) => {
  //     throw err
  //   })
  // },

  get_by_id: (coordinator_id) => {
    let sql = 'SELECT * FROM `college_coordinator` WHERE id=\
    "' + coordinator_id + '"'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `college_coordinator`\
    (first_name, last_name, work_mail, mobile, created_date) VALUES\
    (' + values_str + ')'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  del: (coordinator_id) => {
    let sql = 'DELETE FROM `college_coordinator` WHERE id=\
    "' + coordinator_id + '"'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  update: (id, values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = ""
  }
}
