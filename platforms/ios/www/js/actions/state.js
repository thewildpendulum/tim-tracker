var Dispatcher     = require('../dispatcher/dispatcher');
var StateConstants = require('../constants/state');

var StateActions = {
    setUser: function (user) {
        var action = {
            type: StateConstants.APP_LOGIN,
            user: user
        };

        Dispatcher.handleViewAction(action);
    }
};

module.exports = StateActions;
