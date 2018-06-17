import { return_data } from "../../config/db"

export let college_model = {
  get_all: () => {
    let sql = 'SELECT * FROM `college`'
    console.log(sql)
    return return_data(sql)
  },

  get_by_id: (id) => {
    let sql = 'SELECT * FROM `college` WHERE id="' + id + '"'
    console.log(sql)
    return return_data(sql)
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `college`\
    (name, college_url, placement_url, created_date, address_1, address_2,\
    landmark, city, state, country, pin) VALUES (' + values_str + ')'
    console.log(sql)
    return return_data(sql)
  },

  del: (id) => {
    let sql = 'DELETE FROM `college` WHERE id="' + id + '"'
    console.log(sql)
    return return_data(sql)
  },

  update: (id, values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = ""
  }
}
