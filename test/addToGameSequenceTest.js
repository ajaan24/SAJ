assert = chai.assert;

describe('Testing function addTogameSequence() of both Easy and Hard Mode', function () {

    it('Test 1: addTogameSequenceEasy returns something', function () {
        for (var i = 0; i < 1000; i++) {
            addTogameSequenceEasy();
            assert.exists(gameSequenceEasy[i]);
        }
    });

    it('Test 2: addTogameSequenceHard returns something', function () {
        for (var i = 0; i < 1000; i++) {
            addTogameSequenceHard();
            assert.exists(gameSequenceHard[i]);
        }
    });

    it('Test 3: the returned value is from type number (easy mode)', function () {
        for (var i = 0; i < 1000; i++) {
            assert.typeOf(gameSequenceEasy[i], 'number');
        }
    });

    it('Test 4: the returned value is from type number (hard mode)', function () {
        for (var i = 0; i < 1000; i++) {
            assert.typeOf(gameSequenceHard[i], 'number');
        }
    });

    it('Test 3: the returned value is between 1 and 4 for easy mode', function () {
        for (var i = 0; i < 1000; i++) {
            assert(gameSequenceEasy[i] >= 1 && gameSequenceEasy[i] <= 4);
        }
    });

    it ('Test 4: the returned value is between and 1 and 9 for hard mode', function (){
        for (var i = 0; i < 1000; i++) {
            assert(gameSequenceHard[i] >= 1 && gameSequenceHard[i] <= 9);
        }
    })
});