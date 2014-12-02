'use strict';

describe('myApp.example2 module', function() {

  beforeEach(module('myApp.example2'));

  describe('example2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var example2Ctrl = $controller('Example2Ctrl');
      expect(example2Ctrl).toBeDefined();
    }));

  });
});
