import app from "./config/express"
const port = process.env.PORT || 3000

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Express server listening on port ${port}.\
    \nEnvironment: ${process.env.NODE_ENV}`.green)
})

export default server
