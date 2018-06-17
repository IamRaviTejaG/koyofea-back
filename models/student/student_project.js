import { return_data } from "../../config/db"

export let student_project_model = {
  // get_all: () => {
  //   let sql = 'SELECT * FROM `student_project`'
  //   query(sql).then((result) => {
  //     console.log(result)
  //     return result
  //   }).catch((err) => {
  //     throw err
  //   })
  // },

  get_by_id: (student_id) => {
    let sql = 'SELECT * FROM `student_project` WHERE id="' + student_id + '"'
    console.log(sql)
    return return_data(sql)
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `student_project` (name, description, url)\
    VALUES (' + values_str + ')'
    console.log(sql)
    return return_data(sql)
  },

  // del: (id) => {
  //   let sql = 'DELETE FROM `student_project` WHERE id="' + id + '"'
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
