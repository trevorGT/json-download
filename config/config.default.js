'use strict';

const path = require('path');

exports.keys = 'secret key';
exports.dbFile = path.resolve(__dirname, '../db/entity.json');
exports.security = {
  csrf: {
    enable: false,
  },
};
