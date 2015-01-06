var React = require('react');

var UserPing = React.createClass({
    render: function () {
        return (
            <div onClick={this.onClick}>
                <img src="" title="ping" />
            </div>
        );
    },

    onClick: function () {
        console.log('ping');
    }
});

module.exports = UserPing;
