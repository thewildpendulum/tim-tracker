var React = require('react');
var AppState = require('../stores/state');
var UserActions = require('../actions/user');

var StateAlone = React.createClass({
    getInitialState: function () {
        return {
            showInput: false
        };
    },

    render: function () {
        var btnClasses = 'btn-state ' + this.props.userState.value;
        var inputClass = this.state.showInput ? '' : 'hidden';
console.log(this.getAloneDays());
        return (
            <div>
                <div className={btnClasses} onTouchEnd={this.onClick}>
                    <span>
                        {this.getAloneDays()}
                    </span>
                </div>

                <input
                    type="number"
                    className={inputClass}
                    defaultValue={this.props.userState.days}
                    onBlur={this.onBlur}/>
            </div>
        );
    },

    getAloneDays: function () {
        var units = this.props.userState.days === 1 ? ' day' : ' days';

        return this.props.userState.days + units;
    },

    onClick: function () {
        // allow updates if this is the logged in user
        if (AppState.isCurrentUser(this.props.userId)) {
            this.setState({showInput: !this.state.showInput});
        }
    },

    onBlur: function (e) {
        var data = {
            userId: this.props.userId,
            state: {
                type: this.props.userState.type,
                days: e.target.value
            }
        };

        this.setState({showInput: false});

        UserActions.updateUserState(data);
    }
});

module.exports = StateAlone;
