var RomanNumerals = require('./../js/roman-numerals.js').romanModule;

describe('RomanNumerals', function() {
  beforeEach(function() {
    numerals = new RomanNumerals();
  });

  it('should return nulla when 0 is inputted', function() {
    expect(numerals.makeRoman(0)).toEqual('nulla');
  });
});
