/* global describe it beforeEach afterEach */
const { assert } = require('chai');
const bundleAction = require('../../actions/bundle.action')
const listDetailPack = require('../mock-data/list-detail-pack');

describe('Bundle Action unit Test', () => {
  describe('Bundling', () => {
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
  })

  describe('Pack Arrange', () => {
    it('return array detail pack', () => {
      const payload ={
        cake: 20,
        apple: 25,
      };
      const paramReduce = {
        prev: [],
        curr: 4,
      }

      const expectResult = [
        {
          box: 4,
          itemLeft: 1,
          appleInbox: 6,
          cakeInbox: 5,
        }
      ]
      const result = bundleAction.packArrange(payload)(paramReduce.prev, paramReduce.curr);
      assert.isDefined(expectResult, result);
    })
  })

  describe('Result Arrange', () => {
    it('Return list detail Pack', () => {
      const palyoad = {
        cake: 20,
        apple: 25,
      }
      const result = bundleAction.resultArrange(palyoad)
      assert.isArray(result)
      assert.deepEqual(listDetailPack, result)
    })
  })

});
