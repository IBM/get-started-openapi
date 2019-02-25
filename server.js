const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const _ = require('lodash');

const model = require('./api/visitor_cache');
const apiVersion = 'v1';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set the route maps
const router = express.Router();
router.use(function(req, res, next) {
 next();
});

/** 
 * Endpoint to greet and add a new visitor to the cache.
 * Generates the visitor id as a UUID.
 *
 * REST API example:
 * <code>
 * POST http://localhost:3000/apiVersion/visitors with body:
 * { "name": "Bob" }
 * </code>
 *
 * Response:
 * {"id": "123e4567-e89b-12d3-a456-426655440000", "name": "Bob"}
 *
 * @return 
 *   201: visitor object added
 *   409: duplicate visitor
 */

/*
 * @api [post] /visitors
 * description: "Sets visitor"
 * parameters:
 *   - in: "body"
 *     name: "visitor"
 *     description: "The visitor to add."
 *     required: true
 *     schema:
 *       $ref: "#/definitions/visitor"
 * responses:
 *   "201":
 *     description: "Successful response"
 *     schema:
 *       $ref: "#/definitions/visitor"
 *   "409":
 *     description: "Duplicate error"
 *     schema:
 *       type: object
 *
 */
router.post('/visitors', function (request, response) {
  const userName = request.body.name;
  const visitorObj = model.setVisitor(userName);
  if(_.isEmpty(visitorObj)) {
    response.status(409).json({ message: 'Visitor already exists' });
  } else {
    response.status(201).json(visitorObj);
  }
  return;
});

/**
 * Endpoint to get a JSON object array of all the visitors in the cache
 *
 * REST API example:
 * <code>
 * GET http://localhost:3000/apiVersion/visitors
 * </code>
 *
 * Response:
 * [ {"id": "123e4567-e89b-12d3-a456-426655440000", "name": "Bob"},
 *   {"id": "00112233-4455-6677-8899-aabbccddeeff", "name": "Jane"} ]
 *
 * @return 
 *   200: an array of all the visitors objects, array maybe empty
 */
router.get('/visitors', function (request, response) {
  return response.status(200).json(model.getVisitors());
});

/**
 * Endpoint to get a JSON visitor object from the cache
 *
 * REST API example:
 * <code>
 * GET http://localhost:3000/apiVersion/visitors/00112233-4455-6677-8899-aabbccddeeff
 * </code>
 *
 * Response:
 *   {"id": "00112233-4455-6677-8899-aabbccddeeff", "name": "Jane"}
 *
 * @return
 *   200: visitor object
 *   400: if id not provided
 *   404: if visitor does not exist
 */
router.get('/visitors/:id', function (request, response) {
  const id = request.params.id;
  if (id == null || id.length <= 0) {
    return response.status(400).json({ message: 'Id not provided' });
  }
  const visitorObj = model.getVisitor(id);
  if (_.isEmpty(visitorObj)) {
    return response.status(404).json({ message: 'Visitor does not exist' });
  } else {
    return response.status(200).json(visitorObj);
  }
});

/**
 * Endpoint to delete a JSON visitor object from the cache
 *
 * REST API example:
 * <code>
 * GET http://localhost:3000/apiVersion/visitors/00112233-4455-6677-8899-aabbccddeeff
 * </code>
 *
 * Response:
 *
 * @return 
 *   204: visitor object deleted
 *   400: if id not provided
 *   404: if visitor does not exist
 */
router.delete('/visitors/:id', function (request, response) {
  const id = request.params.id;
  if (id == null || id.length <= 0) {
    return response.status(400).json({ message: 'Id not provided' });
  }
  const visitorObj = model.deleteVisitor(id);
  if (_.isEmpty(visitorObj)) {
    return response.status(404).json({ message: 'Visitor does not exist' });
  } else {
    return response.status(204).json();
  }
});

app.use('/' + apiVersion, router);


//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/api'));

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
