import { query } from "../../config/db";

export let auto_fill = {
  industry_type_list : () => {
    let sql = `SELECT id, name FROM industry`
    return query(sql, [])
  } 
}