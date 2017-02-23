'use strict';

const node = require('./node.js');
const bst = module.exports = {};

bst.create = () => {
  return {
    head: null,
  };
};

bst.addNodeWithValue = (self, value) => {
  let child = node.create(value);

  if(!self.head){
    self.head = child;
    return self;
  }

  node.addNode(self.head, child);
  return self;

};
