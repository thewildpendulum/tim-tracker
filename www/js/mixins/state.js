var React = require('react');
var AppState = require('../stores/state');
var UserActions = require('../actions/user');

module.exports = {
    getInitialState: function () {
        return {
            showSelect: false
        };
    },

    render: function () {
        var btnClasses  = 'btn-state ' + this.props.userState.value;
        var selectClass = this.state.showSelect ? '' : 'hidden';

        return (
            <div>
                <div className={btnClasses}>
                    <img
                        src={this.getIconPath()}
                        title={this.getIconTitle()}
                        onTouchEnd={this.onClick} />
                </div>

                <select
                    className={selectClass}
                    value={this.props.userState.value}
                    onChange={this.onChange}
                    ref="selectState">
                    <option value="good">good</option>
                    <option value="meh">meh</option>
                    <option value="bad">bad</option>
                </select>
            </div>
        );
    },

    getIconPath: function () {
        return '../../img/' + this.props.userState.type + '_' + this.props.userState.value + '.png';
    },

    getIconTitle: function () {
        return this.props.userState.type + ': ' + this.props.userState.value;
    },

    onClick: function (e) {
        // allow updates if this is the logged in user
        if (AppState.isCurrentUser(this.props.userId)) {
            // this.setState({showSelect: !this.state.showSelect});
            this.refs.selectState.getDOMNode.focus();
        }
    },

    onChange: function (e) {
        var data = {
            userId: this.props.userId,
            state: {
                type:  this.props.userState.type,
                value: e.target.value
            }
        };

        this.setState({showSelect: false});

        UserActions.updateUserState(data);
    }
};
