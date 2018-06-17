import { process_query } from "../../config/db"

export let recruiter_model = {
  get_all: () => {
    let sql = 'SELECT * FROM `recruiter`'
    console.log(sql)
    return process_query(sql)
    // query(sql).then((result) => {
    //   console.log(result)
    //   return result
    // }).catch((err) => {
    //   throw err
    // })
  },

  get_by_id: (id) => {
    let sql = 'SELECT * FROM `recruiter` WHERE id="' + id + '"'

    console.log(sql)
    return process_query(sql)
    // return query(sql).then((result) => {
    //   console.log(result)
    //   b = result
    // }).catch((err) => {
    //   throw err
    // })
    // return b
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `recruiter`\
    (name, website_url, description, phone, address_1, address_2, city, state,\
    country, pin) VALUES (' + values_str + ')'
    console.log(sql)
    return process_query(sql)
  },

  del: (id) => {
    let sql = 'DELETE FROM `recruiter` WHERE id="' + id + '"'
    console.log(sql)
    return process_query(sql)
    // query(sql).then((result) => {
    //   console.log(result)
    //   return result
    // }).catch((err) => {
    //   throw err
    // })
  },

  update: (id, values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = ""
  }
}
