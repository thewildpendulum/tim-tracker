var _          = require('lodash');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = _.assign(new Dispatcher(), {
    handleViewAction: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;
