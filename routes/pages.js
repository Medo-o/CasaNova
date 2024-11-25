const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));
router.get('/news', (req, res) => res.render('news'));
router.get('/support', (req, res) => res.render('support'));
router.get('/developer', (req, res) => res.render('developer'));

module.exports = router;
