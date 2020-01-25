const {
  getAllProducts,
  getOneProduct,
  addOneProduct
} = require('../../controllers/productController');
describe('Testing the getAllProducts controller function', () => {
  it('getAllProducts should be a function', () => {
    expect(typeof getAllProducts).toBe('function');
  });
});

describe('Testing the getOneProduct controller function', () => {
  it('getOneProduct should be a function', () => {
    expect(typeof getOneProduct).toBe('function');
  });
});

describe('Testomg the addOneProduct controller function', () => {
  it('addOneProduct should be a function', () => {
    expect(typeof addOneProduct).toBe('function');
  });
});
