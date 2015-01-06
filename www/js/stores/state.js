var _              = require('lodash');
var EventEmitter   = require('events').EventEmitter;
var Dispatcher     = require('../dispatcher/dispatcher');
var StateConstants = require('../constants/state');

var _user = 0;

function _setUser(user) {
    _user = user;
}

var AppState = _.assign({}, EventEmitter.prototype, {
    getUser: function () {
        return _user;
    },

    isCurrentUser: function (id) {
        return id === _user;
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

AppState.dispatcherId = Dispatcher.register(function (payload) {
    switch (payload.action.type) {
        case StateConstants.APP_LOGIN:
            _setUser(parseInt(payload.action.user));

            AppState.emitChange();

            break;

        default:
            // do nothing
    }
});

module.exports = AppState;
