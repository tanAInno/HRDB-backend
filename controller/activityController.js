Activity = require('../model/activityModel');

exports.index = function (req, res) {
    Activity.get(function (err, activities) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Activities retrieved successfully",
            data: activities
        });
    });
};

exports.new = function (req, res) {
    var activity = new Activity();
    activity.date = req.body.date;
    activity.user = req.body.user;
    activity.action = req.body.action;
    activity.target = req.body.target;
// save the asset and check for errors
    activity.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New activity created!',
            data: activity
        });
    });
};

exports.delete = function (req, res) {
    Activity.remove({
        _id: req.params.activity_id
    }, function (err, activity) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Activity deleted'
        });
    });
};