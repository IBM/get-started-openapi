# Challenge 3: Generate API client code

Following the previous challenges, you now have well documented APIs for the application provided. Let's now try and call them from client code - for this challenge we have provided some python test code that accesses the APIs. Typically, as a developer, you would first have to obtain some kind of client library (or SDK), in your chosen language, for the application in question, and then integrate the two together. However, one of the real benefits of having an OpenAPI specification is that you can use tools to automatically generate client libraries in almost all popular languages directly from the API specification - without you having to build dedicated SDKs-per-language for your customers. (As an aside, you can also generate server stubs if you are working in a "spec-first" development model - although this is not part of this challenge). The [Swagger Code Generator](https://github.com/swagger-api/swagger-codegen) is the tool you will use in the challenge to generates these API client libraries. Although you can download and install the tool locally, for this challenge we will use the [online generator](https://github.com/swagger-api/swagger-codegen#online-generators) for the client library/code generation to save you having to do the installation, since the principles are the same.

***Note: Even with just using the online generator, you may still need to install some additional Python modules that are needed by the code in this challenge, depending on your system. Some modules may include `urllib3`, `certifi` and `six`.***

## Steps

1. Generate the client code/library

The [online generator](https://github.com/swagger-api/swagger-codegen#online-generators) expects to have the OpenAPI Specification presented to it embedded in a wrapper JSON document, e.g.:

{
"options": {}
"spec" : {your spec goes here}
}

You then send this document via an HTTP POST to the generator `/gen/clients/{language}` API. To save you from having to create this wrapper, a tool as been provided for you that does this (and pulls in your spec you created in Challenge 1), and then sends the request to the generator. It is run as follows:

```
python ./utils/gen_py_client.py <path_to_the_generated_openapi_spec>
```
For example:

```
python ./utils/gen_py_client.py ./openapi/openapi.json
```

The response should be similar to the following, containing the `link` for download:

```
{"code":"5c00e629-04b8-4e87-9e4c-6d07f045e59d","link":"https://generator.swagger.io/api/gen/download/5c00e629-04b8-4e87-9e4c-6d07f045e59d"}
```
Go to the URL returned in the response and download the zipped Python library.

2. Extract the zipped code

Extract the zipped code to a directory of your choosing. We recommend extracting it in the [application test directory](https://github.ibm.com/developer-first-guild/get-started-openapi/tree/master/test) as this is what the client test code references. If not, you will need to change this [path](https://github.ibm.com/developer-first-guild/get-started-openapi/blob/master/test/test_apis.py#L27).

The extracted code will more than likely have a base directory `python-client`, and be structured similar to the following:
- `swagger_client`: API code
  - `rest.py`: Python HTTP library (urllib3) wrapper
  - `api_client.py`: Handles the client-server communication
  - `configuration.py`: Configuration for the client-server communication
  - `api/default_api.py`: API endpoints (the interface)
  - `models`: Object definitions
- `docs`: API endpoints and models documentation
- `test`: Test harness stubs
- `README.md`: Client library documentation (contains some sample interface code)

3. Update the application port in the client library

The application listens by default to port 3000. The generated client library will however default to `HTTP port 80`. You could add the port to the base OpenAPI file before OAS generation but the perference is to avoid adding the host and port explicitly when not needed. You will therefore need to update the following line of code in `<path_to_extracted_code>/python-client/swagger_client/configuration.py`

```
self.host = "http://localhost/v1"
```
to:
```
self.host = "http://localhost:3000/v1"
```

4. Verify the client library

You now have a Python client library which interfaces you with the application APIs. This makes calling the app APIs much simpler to use. You can try this out and also validate that the client library works with the app APIs by running the [test code](https://github.ibm.com/developer-first-guild/get-started-openapi/blob/master/test/test_apis.py) provided.

With the application still running, you can run the [test code](https://github.ibm.com/developer-first-guild/get-started-openapi/blob/master/test/test_apis.py) and client as follows:

```
python ./test/test_apis.py
```

## Completion

You generated a client library and using the test code you called the API endpoints.

## Follow-on

Make you application available on the cloud.
