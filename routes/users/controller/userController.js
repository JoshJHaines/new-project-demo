const User = require('../model/User');

module.exports = {
    getAllUsers: function (callback) {
        User.find({}, function(err, payload){
            if (err){
                callback(err, null);
            } else {
                callback(null, payload);
            }
        });
    },
};
