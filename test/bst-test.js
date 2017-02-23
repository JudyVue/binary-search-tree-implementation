'use strict';


const expect = require('chai').expect;
const binarySearch = require('../lib/bst');


describe('testing bst', function(){
  it('head should be null', () => {
    let bst = binarySearch.create();
    expect(bst.head).to.equal(null);
  });

  it('head should have a node with value 3', () => {
    let bst = binarySearch.create();
    bst = binarySearch.addNodeWithValue(bst, 3);

    expect(bst.head.value).to.equal(3);
    expect(bst.head.left).to.equal(null);
    expect(bst.head.right).to.equal(null);
  });

  it('head should have a node with value 10', () => {
    let bst = binarySearch.create();
    bst = binarySearch.addNodeWithValue(bst, 10);
    bst = binarySearch.addNodeWithValue(bst, 10);
    bst = binarySearch.addNodeWithValue(bst, 5);
    bst = binarySearch.addNodeWithValue(bst, 3);
    bst = binarySearch.addNodeWithValue(bst, 11);
    bst = binarySearch.addNodeWithValue(bst, 18);

    expect(bst.head.value).to.equal(10);
    expect(bst.head.left.value).to.equal(5);
    expect(bst.head.left.left.value).to.equal(3);

    expect(bst.head.right.value).to.equal(11);
    expect(bst.head.right.right.value).to.equal(18);

  });
});
