'use strict';

describe('Bingo game', function() {
  it('checks the controller is working', function() {
    browser.get('/app');
    var check = $('#check');
    expect(check.getText()).toEqual('This Controller is Working');
  })
});