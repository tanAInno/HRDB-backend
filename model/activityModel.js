var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
    date: {
        type: String,
        default: ''
    },
    user: {
        type: String,
        default: ''
    },
    action: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        default: ''
    }
})

var activity = module.exports = mongoose.model('activity', activitySchema);
module.exports.get = function (callback, limit) {
    Activity.find(callback).limit(limit);
}