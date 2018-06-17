import { query } from "../../config/db"

let process = (sql) => {
  return new Promise((resolve, reject) => {
    query(sql).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}

export let recruiter_model = {
  get_all: () => {
    let sql = 'SELECT * FROM `recruiter`'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  get_by_id: (id) => {
    let sql = 'SELECT * FROM `recruiter` WHERE id="' + id + '"'
    return process(sql)
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `recruiter`\
    (name, website_url, description, phone, address_1, address_2, city, state,\
    country, pin) VALUES (' + values_str + ')'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  del: (id) => {
    let sql = 'DELETE FROM `recruiter` WHERE id="' + id + '"'
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
