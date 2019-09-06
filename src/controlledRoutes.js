// router.get('/public-stuff') should be visible by anyone
// router.get('/hidden-stuff') should require only a valid login
// router.get('/something-to-read') should require the read capability
// router.post('/create-a-thing) should require the create capability
// router.put('/update) should require the update capability
// router.patch('/jp) should require the update capability
// router.delete('/bye-bye) should require the delete capability
// router.get('/everything') should require the superuser capability

'use strict';

const express = require('express');
const thingRouter = express.Router();

const User = require('./model/user.js');
const auth = require('./middleware/auth.js');
const oauth = require('./oauth/google.js');

thingRouter.get('/public-stuff', (req, res, next) => {

});
thingRouter.get('/hidden-stuff', auth('read'),(req, res, next) => {

});
thingRouter.get('/something-to-read', auth('read'), (req, res, next) => {

});
thingRouter.post('/create-a-thing', auth('create'), (req, res, next) => {

});
thingRouter.put('/update', auth('update'), (req, res, next) => {

});
thingRouter.patch('/jp', auth('update'), (req, res, next) => {

});
thingRouter.delete('/bye-bye', auth('delete'),(req, res, next) => {

});
thingRouter.get('/everything', auth('superuser'),(req, res, next) => {

});