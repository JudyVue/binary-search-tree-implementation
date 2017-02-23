'use strict';

const node = module.exports = {};

node.create = (value) => {
  return {
    value,
    left: null,
    right: null,
  };
};

node.addNode = (self, next) => {
  //self is like "this"
  if(next.value === self.value) return;

  if(next.value < self.value) {
    if(!self.left){
      self.left = next;
      return self;
    }
    return node.addNode(self.left, next);
  }

  if(!self.right){
    self.right = next;
    return self;
  }
  return node.addNode(self.right, next);
};
