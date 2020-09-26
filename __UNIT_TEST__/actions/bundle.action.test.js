/* global describe it beforeEach afterEach */
const { assert } = require('chai');
const sinon = require('sinon');
const bundleAction = require('../../actions/bundle.action')

describe('Bundle Action unit Test', () => {
  it('bundling, should be return 0 [no Item Left]', () => {
    const payload = {
      cake: 20,
      apple: 25,
    }
    const count = 5;
    const result = bundleAction.bundling(payload, count);
    assert.isDefined(result);
    assert.equal(0, result);
  })

  it('bundling, should be return 1 [1 item left]', () => {
    const payload = {
      cake: 20,
      apple: 25,
    }
    const count = 4;
    const result = bundleAction.bundling(payload, count);
    assert.isDefined(result);
    assert.equal(1, result);
  })

});
