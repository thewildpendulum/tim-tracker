var _              = require('lodash');
var EventEmitter   = require('events').EventEmitter;
var Dispatcher     = require('../dispatcher/dispatcher');
var UserConstants  = require('../constants/user');

var _users = [
    {
        id: 1,
        name: 'Tim',
        states: [
            {
                type: 'hunger',
                value: 'good',
            },
            {
                type: 'mood',
                value: 'good',
            },
            {
                type: 'tired',
                value: 'good',
            },
            {
                type: 'alone',
                value: 'good',
                days: 2
            }
        ],
        status: 'good',
        icon: ''
    }
];

var UserStore = _.assign({}, EventEmitter.prototype, {
    getUsers: function () {
        return _users;
    },

    getUser: function (id) {
        return _.find(_users, {id: id});
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    updateUserState: function (data) {
        var user  = this.getUser(data.userId);
        var state = _.find(user.states, {type: data.state.type});

        _.merge(state, data.state);
    }
});

UserStore.dispatcherId = Dispatcher.register(function (payload) {
    switch (payload.action.type) {
        case UserConstants.UPDATE_USER_STATE:
            UserStore.updateUserState(payload.action.data);

            UserStore.emitChange();

            break;
        default:
            // do nothing
    }
});

module.exports = UserStore;
