'use strict';

const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
  role: { type: String, required: true },
  capabilities: { type: Array, required: true },
});

let editor = new roleSchema({role: "editor", capabilities: ["read"]})

editor.save();
module.exports = mongoose.model('roles', roleSchema);