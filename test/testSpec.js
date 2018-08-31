const SwaggerParser = require('swagger-parser');
const ArgumentParser = require('argparse').ArgumentParser;

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Validate the OpenAPI Specification syntax'
});
parser.addArgument(
  [ 'file' ],
  {
    help: 'path to the generated OpenAPI Specification file'
  }
);

const args = parser.parseArgs();
SwaggerParser.validate(args['file'], function(err, api) {
  if (err) {
    console.error(err);
  }
  else {
    console.log("SUCCESS! API name: %s, Version: %s", api.info.title, api.info.version);
  }
});
