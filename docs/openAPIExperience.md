# OpenAPI Experience 

Like most API design and specification approaches, using the [OpenAPI Specification (OAS)](https://github.com/OAI/OpenAPI-Specification) is focused around defining the details of the endpoints supported by your application/service (i.e. the URLs you expect callers to use to access it). Details should be provided that define the URL itself; the parameters required, the responses given in return - along with the exact formatting of these. In addition, the OAS goes further allowing examples to be provided on how to use the API, including an ability to effectively "Try Out" the API. Further, once you have an OpenAPI specification for your API, there are a wide suite of tools you can use to generate code - e.g. client libraries, server stubs, automated REST testing, basic user interfaces etc. Your OpenAPI specification should be the nexus which drives both the client and server side of your overall application.

As well as different tools, there are many different process approaches. For example, some projects are run along a strict "spec-first" approach, where you create a complete API specification before any client or server code. There are a number of frameworks available that help you work in this model, such as [LoopBack](https://loopback.io/). An alternative approach that is used by many developers is that the server code (or at least a prototype version of it) comes first, then followed by the API specification. In such circumstance the set of tools as provided by the open source software framework, [Swagger](https://swagger.io/) are very helpful.  These tools were formed around the precursor to the OpenAPI specification (which was called the Swagger Specification), before this specification was accepted into open governance under the [Open API Initiative](https://www.openapis.org/) organization as part of the Linux Foundation (and renamed OpenAPI). Many people still refer to the format as "Swagger" rather than "OpenAPI". In addition to the open source Swagger tools, [SmartBear Software](https://smartbear.com/) also provide commercial versions of tools for the Swagger economy.

The OpenAPI experience and its challenges will allow you to experiment in OpenAPI from specification, through documentation and finally client code generation; to give you the end to end experience of OpenAPI. It is based on the server code first approach, providing a simple application for you as your starting point, and the use of [Swagger tools](https://swagger.io/) during challenges.

***Note: All commands should be run in the directory where the sample app is located (i.e. get-started-openapi) unless otherwise stated.*** 

## Challenges

Time to take to challenges. Follow them in order as the output of one challenge leads into the next.

* [Challenge 1: Draft an OpenAPI Specification](draftOpenAPIChallenge.md)
* [Challenge 2: Render API documentation from the Application](renderAPIDocsChallenge.md)
* [Challenge 3: Generate API client code](generateClientCodeChallenge.md)
* [Challenge 4: Handle APIs from the cloud](uploadToCloudChallenge.md)

## Conclusion

These challenges hopefully show how easy it is and also the value of defining an OpenAPI Specification for an application. The benefits of standard API definitions combined with easily accessible tools for API documentation rendering and client code generation is a bonus to you the developer creating the app and also the developers consuming your app.
