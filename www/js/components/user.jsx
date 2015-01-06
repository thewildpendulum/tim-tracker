var React     = require('react');
var Status    = require('./user_status');
var States    = require('./user_states');
var Ping      = require('./user_ping');
var UserStore = require('../stores/user');
var AppState  = require('../stores/state');

function getAppState() {
    // always render Tim
    return {
        user: UserStore.getUser(1)
    };
}

var User = React.createClass({
    getInitialState: function () {
        return getAppState();
    },

    componentDidMount: function () {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        UserStore.removeChangeListener(this._onChange);
    },

    render: function () {
        var PingView = AppState.isCurrentUser(this.state.user.id) ? null : <Ping />;

        return (
            <div>
                <Status
                    status={this.state.user.status}
                    name={this.state.user.name}
                    icon={this.state.user.icon} />

                <States userId={this.state.user.id} states={this.state.user.states}/>

                {PingView}
            </div>
        );
    },

    _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports = User;
