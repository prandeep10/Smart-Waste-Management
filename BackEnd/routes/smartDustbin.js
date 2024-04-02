const express = require('express');
const router = express.Router();
const { getSmartDustbinStatus } = require('../controller/dustbin');

router.get("/dustbinStatus", getSmartDustbinStatus);

module.exports = router;
