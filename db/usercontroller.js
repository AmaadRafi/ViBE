//import user class
User = require('./users');

// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};

//Add a user

exports.new = function (req, res) {
    var user = new User();
    user._id = req.body._id;
    user.firstName = req.body.firstName ? req.body.firstName : user.firstName;
    user.lastName = req.body.lastName ? req.body.lastName : user.lastName;
    user.email = req.body.email;
    user.role = req.body.role;
    user.provider = req.body.provider;
// save the new user and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New user created!',
            data: user
        });
    });
};

//Delete a user by id
exports.delete = function (req, res) {
    User.remove({
        _id: req.params._id
    }, function (err, user) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};

//Find user by id
exports.view = function (req, res) {
    User.findById(req.params._id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details:',
            data: user
        });
    });
};

// Edit user by id
exports.update = function (req, res) {
    User.findById(req.params._id, function (err, user) {
            if (err)
                res.send(err);
    user._id = req.body._id;
    user.firstName = req.body.firstName ? req.body.firstName : user.firstName;
    user.lastName = req.body.lastName ? req.body.lastName : user.lastName;
    user.email = req.body.email;
    user.role = req.body.role;
    user.provider = req.body.provider;
    // save the user and check for errors
            user.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'User Info updated',
                    data: user
                });
            });
        });
    };


