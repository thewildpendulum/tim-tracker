var React    = require('react');
var AppState = require('../stores/state');
var Login    = require('./login');
var User     = require('./user');

function getAppState() {
    return {
        user: AppState.getUser()
    };
}

var AppController = React.createClass({
    getInitialState: function () {
        return getAppState();
    },

    componentDidMount: function () {
        AppState.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AppState.removeChangeListener(this._onChange);
    },

    render: function () {
        var View = this.state.user ? <User /> : <Login />;

        return (
            View
        );
    },

    _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports = AppController;
