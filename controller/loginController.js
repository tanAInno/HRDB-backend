'use strict';

exports.login = function(req, res) {
    if(req.body.username == "user" && req.body.password == "pass"){
        return res.send({status : "login success",
                        accessToken : req.body.username+''});
    }
    return res.status(404).send({status : "login failed"});
};
