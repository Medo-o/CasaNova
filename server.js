const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// إعداد المحرك والقواعد
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// الاتصال بقاعدة البيانات
mongoose.connect('MONGO_URI', { useNewUrlParser: true, useUnifiedTopology: true });

// إعداد الجلسات
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true
}));

// المسارات
app.use('/', require('./routes/pages'));
app.use('/', require('./routes/auth'));

// تشغيل الخادم
app.listen(3000, () => console.log('الخادم يعمل على http://localhost:3000'));
