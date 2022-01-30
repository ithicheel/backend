const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const app = express()
dotenv.config({ path: './config/config.env' });

// Router oruulj ireh
const productsRoutes = require('./router/product');
const usersRoutes = require("./router/users");
const cateRoutes = require('./router/cate');
// Middleware
const errorHandler = require('./middleware/error');


app.use(express.json());
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/categories', cateRoutes);
app.use(errorHandler);

// Server Listen
const server = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Сэрвэр ${process.env.PORT} порт дээр аслаа...`.cyan.underline.bold);
})

process.on('unhandledRejection', (err, promise) => {
  console.log(`Aldaa garlaa : ${err.message}`.red.underline.bold);
  server.close(() => {
    process.exit(1);
  });
})