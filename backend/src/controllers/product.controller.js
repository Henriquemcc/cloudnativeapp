const { Product } = require('../models');

exports.get = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).send(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.insert = async (req, res) => {
    try {
        await Product.create(req);
        return res.status(200).send('Product inserted sucessfully');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);
        res.status(200).send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};