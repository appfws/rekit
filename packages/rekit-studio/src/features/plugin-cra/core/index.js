const app = require('./app');
const feature = require('./feature');
const component = require('./component');
const action = require('./action');
const hooks = require('./hooks');

module.exports = {
  name: 'cra',
  app,
  hooks,
  elements: {
    feature,
    component,
    action,
  },
};
