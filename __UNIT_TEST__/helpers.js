/* global describe it */
const { assert } = require('chai');
const sinon = require('sinon');
const { generateSequence } = require('../helpers')

describe('Helpers Unit Test', () => {
  describe('Generate Sequence', () => {
    it('should be return array sequence number', () => {
      const itemOne = 30;
      const itemTwo = 40;
      const result = generateSequence(itemOne, itemTwo);
      assert.isArray(result);
      assert.equal(itemTwo, result.length);
    })
  })
})
