const dustbin = require('../models/smartDustbinModel');

const getSmartDustbinStatus = async (req, res) => {
    try {
        const {status} = req.query;

        const smartDustbinStatus = await dustbin.find({status: status});
        res.status(200).json(smartDustbinStatus);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

modules.exports = {
    getSmartDustbinStatus
}