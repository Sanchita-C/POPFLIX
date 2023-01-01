const { assert } = require("chai");

//test cases 1012ab22f
assert = chai.assert;

describe('Testing function selectMovie() project Pop-flix', function () {

    it('Test 1: selectMovie() returns selected moviee', function () {
        for(let i in Movies)
			if(Movies[i].genre == selected){
			  genreMovies.push(Movies[i]);
			}
			assert.equal(selectMovie(),Movies[i])
		
		});

	})