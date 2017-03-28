'use strict';

exports.show = function* () {
  this.body = yield this.service.entity.show();
};

exports.index = function* () {
  this.body = yield this.service.entity.list();
};

exports.create = function* () {
  const id = yield this.service.entity.create(this.request.body);
  this.body = {
    id,
  };
  this.status = 201;
};

exports.update = function* () {
  yield this.service.entity.update();
  this.status = 204;
};