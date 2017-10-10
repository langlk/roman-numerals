var RomanNumerals = require('./../js/roman-numerals.js').romanModule;

describe('RomanNumerals', function() {
  beforeEach(function() {
    numerals = new RomanNumerals();
  });

  it('should return nulla when 0 is inputted', function() {
    expect(numerals.makeRoman(0)).toEqual('nulla');
  });

  it('should return an error when input is not an integer', function() {
    expect(numerals.makeRoman(NaN)).toEqual('error: empty field');
  });

  it('should return an error when input is negative', function() {
    expect(numerals.makeRoman(-1)).toEqual('error: negative');
  });

  it('should return X when input it 10', function() {
    expect(numerals.makeRoman(10)).toEqual('X');
  })
});
