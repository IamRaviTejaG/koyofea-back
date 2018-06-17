import { query } from "../../config/db"

export let student_model = {
  // get_all: () => {
  //   let sql = 'SELECT * FROM `student`'
  //   query(sql).then((result) => {
  //     console.log(result)
  //     return result
  //   }).catch((err) => {
  //     throw err
  //   })
  // },

  get_by_id: (id) => {
    let sql = 'SELECT * FROM `student` WHERE id="' + id + '"'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `student`\
    (first_name, last_name, email, dob, mobile, linkedin, linkedin_id,\
    created_date) VALUES (' + values_str + ')'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  // del: (id) => {
  //   let sql = 'DELETE FROM `student` WHERE id="' + id + '"'
  //   query(sql).then((result) => {
  //     console.log(result)
  //     return result
  //   }).catch((err) => {
  //     throw err
  //   })
  // },
  //
  // update: (id, values) => {
  //   let values_str = values.map(value => `"${value}"`).join(', ')
  //   let sql = ""
  // }
}
