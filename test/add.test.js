const { expect } = require('chai');
const A = require('../src/index.js');

describe('test add', () => {
  it('100+11=111', () => {
    expect(A.add(100, 11)).to.be.equal(111);
  });
});
