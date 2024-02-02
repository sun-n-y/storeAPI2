const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ name: 'accent chair' });
  res.status(200).json({ nbHits: products.length, data: products });
};

const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const products = await Product.find({ featured });
  res.status(200).json({ nbHits: products.length, data: products });
};

module.exports = { getAllProducts, getAllProductsStatic };
