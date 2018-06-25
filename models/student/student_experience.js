import { query } from "../../config/db"

export let student_experience_model = {
  // get_all: () => {
  //   let sql = 'SELECT * FROM `student_experience`'
  //   query(sql).then((result) => {
  //     console.log(result)
  //     return result
  //   }).catch((err) => {
  //     throw err
  //   })
  // },

  get_by_id: (student_id) => {
    let sql = 'SELECT * FROM `student_experience` WHERE id="' + student_id + '"'
    console.log(sql)
    return query(sql)
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `student_experience` (start_date, end_date,\
    position, description) VALUES (' + values_str + ')'
    console.log(sql)
    return query(sql)
  },

  // del: (id) => {
  //   let sql = 'DELETE FROM `student_experience` WHERE id="' + id + '"'
  //   query(sql).then((result) => {
  //     console.log(result)
  //     return result
  //   }).catch((err) => {
  //     throw err
  //   })
  // },

  // update: (id, values) => {
  //   let values_str = values.map(value => `"${value}"`).join(', ')
  //   let sql = ""
  // }
}
