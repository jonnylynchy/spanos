const router = require("express").Router();
const timerRoutes = require("./timers");

// Book routes
router.use("/api/timers", timerRoutes);

module.exports = router;
