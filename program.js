
// do something with 2 numbers
module.exports.doSomething = function(a, b) {
  return a * b;
};

/* A comment in this method */
module.exports.doNothing = function(a, b) {
  // I have no sense
};

module.exports.doSomethingV2 = function(a, b) {
  // The original one is deprecated, I'm the good one
  return a + b;
};
