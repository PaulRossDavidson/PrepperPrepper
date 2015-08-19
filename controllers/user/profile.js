var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('user/profile', {user: req.currentUser });
});

module.exports = router;
