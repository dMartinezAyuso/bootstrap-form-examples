'use strict';

describe('myApp.example5 module', function() {

  beforeEach(module('myApp.example5'));

  describe('example5 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var example5Ctrl = $controller('Example5Ctrl');
      expect(example5Ctrl).toBeDefined();
    }));

  });
});
