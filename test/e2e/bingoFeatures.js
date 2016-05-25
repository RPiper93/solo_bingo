'use strict';

describe('Bingo game', function() {
  it('checks the controller is working', function() {
    browser.get('/app');
    var check = $('#check');
    expect(check.getText()).toEqual('This Controller is Working');
  })

  it('generates 15 numbers between 1 and 90', function() {
    browser.get('/app');
    var numbers = $('#numbers');
    expect(numbers.first()).toBeLessThan(10);
    expect(numbers.last()).toBeGreaterThan(80);
  });
});