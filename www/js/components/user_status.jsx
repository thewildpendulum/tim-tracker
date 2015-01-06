var React = require('react');

var UserStatus = React.createClass({
    render: function () {
        return (
            <div>
                <div className={this.props.status}>
                    <img src={this.props.icon} title={this.props.name + ': ' + this.props.status} />
                </div>
            </div>
        );
    }
});

module.exports = UserStatus;
