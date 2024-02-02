const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const search = 'ut';
  const products = await Product.find({
    name: { $regex: search, $options: 'i' },
  });
  res.status(200).json({ nbHits: products.length, data: products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  console.log(queryObject);

  const products = await Product.find(queryObject);
  res.status(200).json({ nbHits: products.length, data: products });
};

module.exports = { getAllProducts, getAllProductsStatic };
