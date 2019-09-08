'use strict';

const express = require('express');
const thingRouter = express.Router();

const auth = require('./middleware/auth.js');

thingRouter.get('/public-stuff', (req, res, next) => {
  res.send('public stuff accessed');
});
thingRouter.get('/hidden-stuff', auth('read'),(req, res, next) => {
  res.send('hidden stuff accessed');
});
thingRouter.get('/something-to-read', auth('read'), (req, res, next) => {
  res.send('something to read accessed');
});
thingRouter.post('/create-a-thing', auth('create'), (req, res, next) => {
  res.send('create a thing accessed');
});
thingRouter.put('/update', auth('update'), (req, res, next) => {
  res.send('update accessed');
});
thingRouter.patch('/jp', auth('update'), (req, res, next) => {
  res.send('/jp accessed');
});
thingRouter.delete('/bye-bye', auth('delete'),(req, res, next) => {
  res.send('bye bye accessed');
});
thingRouter.get('/everything', auth('superuser'),(req, res, next) => {
  res.send('everything accessed');
});

module.exports = thingRouter;