'use strict';

describe('myApp.example3 module', function() {

  beforeEach(module('myApp.example3'));

  describe('example3 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var example3Ctrl = $controller('Example3Ctrl');
      expect(example3Ctrl).toBeDefined();
    }));

  });
});
