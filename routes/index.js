const router = require("express").Router();
const timerRoutes = require("./timers");

// Book routes
router.use(timerRoutes);

module.exports = router;
