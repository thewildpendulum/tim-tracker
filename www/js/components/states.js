var Hunger = require('./state_hunger');
var Mood   = require('./state_mood');
var Tired  = require('./state_tired');
var Alone  = require('./state_alone');

module.exports = {
    hunger: Hunger,
    mood:   Mood,
    tired:  Tired,
    alone:  Alone
};
