import { query } from "../../config/db"

export let college_model = {
  get_all: () => {
    let sql = 'SELECT * FROM `college`'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  get_by_id: (id) => {
    let sql = 'SELECT * FROM `college` WHERE id="' + id + '"'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `college`\
    (name, college_url, placement_url, created_date, address_1, address_2,\
    landmark, city, state, country, pin) VALUES (' + values_str + ')'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  del: (id) => {
    let sql = 'DELETE FROM `college` WHERE id="' + id + '"'
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
