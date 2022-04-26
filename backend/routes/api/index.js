const express = require("express");
const router = express.Router();

//app.use("/",router);
router.use('/ta_admin', require('./ta_admin'));
router.use('/ta_management', require('./ta_management'));
router.use('/register-page', require('./register'));

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;