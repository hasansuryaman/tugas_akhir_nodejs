// filename: api-routes.js

let router = require('express').Router();

// set defauld API response
router.get('/', function (req, res) {
    res.json({
        status: 'API its working',
        message: 'Welcome to app'
    });
});

// import mahaiswaController
var mahasiswaController = require('./mahasiswaController');

// mahasiswa apiRoutes
router.route('/mahasiswa')
    .get(mahasiswaController.index)
    .post(mahasiswaController.new);

router.route('/mahasiswa/:mahasiswa_id')
    .get(mahasiswaController.view)
    .patch(mahasiswaController.update)
    .put(mahasiswaController.update)
    .delete(mahasiswaController.delete);

// export API routes
module.exports = router;