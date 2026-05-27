const { Product } = require('../models');

exports.get = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).send(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};