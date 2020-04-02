// IMPORT MODULES under test here:
import compareFunction from '../javafunction/comparenumbersfunction.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('4, 4', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 4;
    const correctNumber = 4;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareFunction(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('5, 4', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 5;
    const correctNumber = 4;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareFunction(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('3, 4', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 3;
    const correctNumber = 4;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareFunction(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});


