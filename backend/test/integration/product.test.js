const supertest = require('supertest');
const app = require('../../src/app');
const request = supertest(app);
const { Product } = require('../../src/models');

test('Get products', async() => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
    expect(response.text.length).toBeGreaterThanOrEqual(0);
});

test('Insert product', async() => {
    const payload = {
        name: 'Product 1',
        price: 1.1,
        category: 'Category 1',
        count: 10,
        rating: 1.1,
    };
    const response = await request.post('/products').send(payload);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Product inserted sucessfully');
});

test('Delete product', async() => {
    const productData = {
        name: 'Product to be deleted',
        price: 1.1,
        category: 'Category to be deleted',
        count: 10,
        rating: 1.1,
    };
    let product = await Product.create(productData);
    const response = await request.delete(`/products/${product.id}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Product deleted sucessfully');
});