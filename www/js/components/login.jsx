var React = require('react');
var StateActions = require('../actions/state');

var Login = React.createClass({
    render: function () {
        return (
            <div className="login">
                <p>Are you Tim?</p>
                <div className="btn-round no" data-user="2" onTouchEnd={this.handleClick}>No</div>
                <div className="btn-round yes" data-user="1" onTouchEnd={this.handleClick}>Yes</div>
            </div>
        );
    },

    handleClick: function (e) {
        var user = e.target.dataset.user;

        StateActions.setUser(user);
    }
});

module.exports = Login;
