// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var contactController = require('./controller/contactController');
var assetController = require('./controller/assetController');
var loginController = require('./controller/loginController');
var activityController = require('./controller/activityController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
router.route('/contacts/reset/all')
    .delete(contactController.deleteAll);
router.route('/login')
    .post(loginController.login);
router.route('/assets')
    .get(assetController.index)
    .post(assetController.new);
router.route('/assets/:asset_id')
    .get(assetController.view)
    .patch(assetController.update)
    .put(assetController.update)
    .delete(assetController.delete);
router.route('/activities')
    .get(activityController.index)
    .post(activityController.new);
router.route('/activities/:activity_id')
    .delete(activityController.delete)
// Export API routes
module.exports = router;