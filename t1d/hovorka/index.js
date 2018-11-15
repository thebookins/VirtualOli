const Glucose = require('./glucose');
const Insulin = require('./insulin');

module.exports = (dt) => {
  const glucose = Glucose(dt);
  const insulin = Insulin(dt);

  const api = {
    step: () => {
      glucose.step(insulin.x);
      insulin.step();
    },
  };

  return api;
};
