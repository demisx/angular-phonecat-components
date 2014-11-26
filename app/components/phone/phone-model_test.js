'use strict';

describe('service', function() {
  beforeEach(module('components.phone'));

  it('check the existence of Phone factory', inject(function(Phone) {
      expect(Phone).toBeDefined();
    }));
});