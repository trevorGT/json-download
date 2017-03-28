'use strict';

const fs = require('fs');
const path = require('path');

module.exports = app => {
  class EntityService extends app.Service {

    constructor(ctx) {
      super(ctx);
      this.dbFile = app.config.dbFile;
    }

    * show(params) {
      return {};
    }

    * list(params) {
      let content;
      try {
        content = fs.readFileSync(this.dbFile);
      } catch(e) {
        this.ctx.logger.error(e);
        throw e;
      }
      return content;
    }

    * create(data) {
      try {
        fs.writeFileSync(this.dbFile, JSON.stringify(data));
      } catch(e) {
        this.ctx.logger.error(e);
      }
      return 1;
    }

    * update(params) {
    }

  }

  return EntityService;
};