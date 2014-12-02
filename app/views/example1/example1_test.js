'use strict';

describe('myApp.example1 module', function() {

  beforeEach(module('myApp.example1'));

  describe('example1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var example1Ctrl = $controller('Example1Ctrl');
      expect(example1Ctrl).toBeDefined();
    }));

  });
});
