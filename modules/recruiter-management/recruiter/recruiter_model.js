import { query } from '../../../config/db'

export let recruiterModel = {
  get_all: () => {
    let sql = `SELECT r.name, r.website_url, r.description, r.verified, r.phone, r.address_1, r.address_2, r.landmark, r.city, r.state, r.country, r.pin, r.size, i.name
              FROM recruiter r
              INNER
              JOIN industry i
              ON r.industry_id=i.id`
    return query(sql, [])
  },

  get_all_name: () => {
    let sql = `SELECT id As value, name As label FROM recruiter`
    return query(sql, [])
  },

  get_by_id: (id) => {
    let sql = `SELECT r.name, r.website_url, r.description, r.verified, r.phone, r.address_1, r.address_2, r.landmark, r.city, r.state, r.country, r.pin, r.size, i.name As industry
              FROM recruiter r
              INNER
              JOIN industry i
              ON r.industry_id=i.id
              WHERE r.id = ?`
    return query(sql, id)
  },

  add: (values) => {
    let sql = `INSERT INTO recruiter SET ?`
    return query(sql, values)
  },

  // Not Deleting the data
  // del: (id) => {
  //   let sql = 'DELETE FROM `recruiter` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE recruiter SET ? WHERE id  = ?`
    return query(sql, [values, id])
  }
}
