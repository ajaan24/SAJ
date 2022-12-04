assert = chai.assert;

describe('Testing function checkEqual() of Easy Mode', function () {
  var result = checkEqual();

  it('Test 1: checkEqual() returns something', function () {
    assert.exists(result);
  });

  it('Test 2: the returned value is from type boolean', function () {
    assert.typeOf(result, 'boolean');
  });

  it('Test 3: the returned value is true when game sequence = user sequence', function () {
    gameSequenceEasy=[1,2,3,4,1];
    userSequenceEasy=[1,2,3,4,1];

    assert.equal(checkEqual(), true);
  });

  it ('Test 4: the returned value is false game sequence != user sequence', function (){
    gameSequenceEasy=[1,2,3,4,1];
    userSequenceEasy=[1,2,3,4,2];

    assert.equal(checkEqual(), false);
  })
});