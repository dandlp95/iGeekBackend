const route = require("express").Router();
const products = require("../controllers/products");

route.get(
  "/",
  products.getAllProducts
  /* #swagger.summary = 'Returns all Products' */
  /* #swagger.description = 'Returns all products added to database.' */
  /* #swagger.operationId = 'getAllProducts.' */
  /* #swagger.responses[200] = {
      description: 'Returns all products.',
      schema: {$ref: '#/definitions/Products'}
  } */
);

route.get(
  "/:id",
  products.getById
  /* #swagger.summary = 'Returns 1 product by Id.' */
  /* #swagger.description = 'Returns the product with the Id that matches the request
    Id.' */
  /* #swagger.operationId = 'getProduct' */
  /* #swagger.parameters['id'] = {description: 'Product Id'} */
  /* #swagger.responses[200] = {
    description: 'Returns product with specified request id',
    schema: { $ref: '#/definitions/Product'}
  } */
);

route.post(
  "/",
  products.addProduct
  /* #swagger.summary = 'Adds 1 product.' */
  /* #swagger.description = 'Adds the product in the request.' */
  /* #swagger.operationId = 'addProduct' */
  /* #swagger.parameters = [{
    name: 'body', 
    in:'body',
    schema: { $ref: '#/definitions/Product' }
  }] */
  /* #swagger.responses[200] = {
    description: 'Returns posted product',
    schema: { $ref: '#/definitions/Product'}
  }
  */
);

module.exports = route;
