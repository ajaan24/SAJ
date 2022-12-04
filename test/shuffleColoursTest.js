assert = chai.assert;

describe('Testing the shuffleCol() function of Hard Mode', function () {

    it('Test 1: there are four colours that exist in the colours array', function () {
        for(i=0;i<4;i++){
            assert.exists(colourArray[i]);
        }
    });

    it('Test 2: elements of colour array are strings', function () {
        for(i=0;i<4;i++){
            assert.typeOf(colourArray[i],'string');
        }
    });

    it('Test 3: colour array is in the following order at the start: red, blue, green, yellow', function () {
        assert.sameOrderedMembers(['red','blue','green','yellow'], colourArray);
    });

    it('Test 4: after shuffling by calling shuffleCol(), the colour array is not in the same order as it was', function () {
        shuffleCol();
        assert.notSameOrderedMembers(['red','blue','green','yellow'], colourArray);
    });
});