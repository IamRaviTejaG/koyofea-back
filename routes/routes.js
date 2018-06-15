import { router, query } from "./index"
export default () => {
  router.get("/", (req, res) => { 
    query('show tables').then((result) => {
      console.log(result)
    }).catch((err) => {
      throw err
    });
    res.status(200).json({message: "welcome to api testing"})
  })
}