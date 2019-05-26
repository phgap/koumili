'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/


module.exports = {
    user_auth: user_auth
};

function user_auth(req, res) {
    let token = req.swagger.params.authentication.value;
    //TODO
    let result = Math.random() > 0.8 ? false : true
    res.json({ result: result });
}
