const _ = require('lodash');
const uuidv4 = require('uuid/v4');

module.exports = function () {
  let visitors = {};
  return {
    getVisitors: function () { return createVisitorsObjs(visitors); },
    getVisitor: function (id) {
      const invVisitors = _.invert(visitors);
      if (!(invVisitors.hasOwnProperty(id))) {
        return {};
      }
      return createObj(id, invVisitors[id]);
    },
    setVisitor: function (visitorName) {
      if (visitors.hasOwnProperty(visitorName)) {
        return {};
      }
      visitors[visitorName] = uuidv4();
      return createObj(visitors[visitorName], visitorName);
    },
    deleteVisitor: function (id) {
      const invVisitors = _.invert(visitors);
      if (!(invVisitors.hasOwnProperty(id))) {
        return {};
      }
      const name = invVisitors[id];
      const deleteObj = createObj(id, name);
      visitors = _.omit(visitors, name);
      return deleteObj;
    }
  }
}();

function createVisitorsObjs(visitors) {
  let visitorObjs = [];
  for (let key in visitors) {
    visitorObjs.push(createObj(visitors[key], key));
  }
  return visitorObjs;
}

function createObj(id, name) {
  return {'id': id, 'name': name};
}
