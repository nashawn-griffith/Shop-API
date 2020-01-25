const {
  getAllProducts,
  getOneProduct,
  addOneProduct
} = require('../controllers/productController');

const router = require('express').Router();

/*Get all Products*/
router.get('/products', getAllProducts);

/*Get one Product*/
router.get('/products/:id', getOneProduct);

/* Add a product */
router.post('/product/add', addOneProduct);

module.exports = router;
