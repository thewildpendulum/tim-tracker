// This app should totally be called MoodRing

var React = require('react');
var AppController = require('./components/app');

// for mobile
React.initializeTouchEvents(true);

React.render(
    <AppController />,
    document.getElementById('app')
);
