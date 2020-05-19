const router = require("express").Router();
const timersController = require("../controllers/timersController");

// Matches with "/api/timers"
router.route("/")
  .get(timersController.findAll)
  .post(timersController.create);

// Matches with "/api/timers/:id"
router
  .route("/:id")
  .get(timersController.findById)
  .put(timersController.update)
  .delete(timersController.remove);

module.exports = router;