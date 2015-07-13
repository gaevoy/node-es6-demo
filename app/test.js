define(['exports', './source-map-support'], function (exports, _sourceMapSupport) {
  'use strict';

  (0, _sourceMapSupport.install)();

  console.log([1, 2, 5, 5].map(function (x) {
    return x * x;
  }));

  throw new Error('Test!');
});
//# sourceMappingURL=test.js.map