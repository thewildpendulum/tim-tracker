var React  = require('react');
var States = require('./states');

var UserStates = React.createClass({
    render: function () {
        var userId = this.props.userId;
        var states = this.props.states.map(function (state) {
            var View = States[state.type];

            return <View
                        userId={userId}
                        userState={state} />;
        });

        return (
            <div>{states}</div>
        );
    }
});

module.exports = UserStates;
