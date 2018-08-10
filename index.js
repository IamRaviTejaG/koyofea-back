import app from "./config/express"
let port;

if (process.env.NODE_ENV === 'test') {
  port = process.env.TEST_PORT;
} else {
  port = process.env.PORT;
}

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Express server listening on port ${port}.\
    \nEnvironment: ${process.env.NODE_ENV}`.green)
});

export default server;
