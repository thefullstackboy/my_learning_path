const winston = require('winston');
const expressWinston = require('express-winston');
const express = require('express');
const app = express();
const port = 3001;

//more options here - https://github.com/bithavoc/express-winston#request-logging
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: false,
  msg: "HTTP  ",
  expressFormat: true,
  colorize: false,
  ignoreRoute: function (req, res) { return false; }
}));


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


app.get('/', (req, res) => {
  res.send('Hello World! - Winston logged');
});


app.get('/api/test', (req, res) => {
  res.json({'message': 'Hello winston!'});
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});