var Dispatcher     = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user');

var UserActions = {
    updateUserState: function (data) {
        var action = {
            type: UserConstants.UPDATE_USER_STATE,
            data: data
        };

        Dispatcher.handleViewAction(action);
    }
};

module.exports = UserActions;
