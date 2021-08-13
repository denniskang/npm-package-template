const { expect } = require('chai');
const A = require('../src/index.js');

describe('test minus', () => {
  it('100-11=89', () => {
    expect(A.minus(100, 11)).to.be.equal(89);
  });
  it('132-22=110', () => {
    expect(A.minus(132, 22)).to.be.equal(110);
  });
});
