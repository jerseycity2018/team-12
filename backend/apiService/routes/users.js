var express = require('express');
var router = express.Router();
var request = require('request');


/* GET users listing. */
router.get('/', function(req, res, next) {

    res.json(["Tony","Lisa","Michael","Ginger","Food"]);

});

router.route('/').post(function(req,res,next) {





    }
);



module.exports = router;
