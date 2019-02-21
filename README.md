
# OpenAPI getting started application

The Getting Started tutorial for the [OpenAPI Specification (OAS)](https://github.com/OAI/OpenAPI-Specification) uses this sample application to provide you with a sample workflow for working with OpenAPI; you set up a development environment, deploy an app locally and start playing with OpenAPI.

It is based on the [Node.js getting started application](https://github.com/IBM-Cloud/get-started-node). It is modified to use an internal cache to facilitate information to be added and returned to the UI instead of a database. The APIs have also been updated to reflect REST API CRUD operations.

<p align="center">
  <img src="https://raw.githubusercontent.com/IBM-Bluemix/get-started-java/master/docs/GettingStarted.gif" width="300" alt="Gif of the sample app contains a title that says, Welcome, a prompt asking the user to enter their name, and a list of the cache contents which are the names Joe, Jane, and Bob. The user enters the name, Mary and the screen refreshes to display, Hello, Mary, I've added you to the cache. The cache contents listed are now Mary, Joe, Jane, and Bob.">
</p>

The following steps are the general procedure to set up your app and take on the API experience and its challenges.

## Before you begin

### Prerequisites
 
The following prerequisites are required:

* [Git](https://git-scm.com/downloads) installed.
* [Node](https://nodejs.org) installed.
* [Python](https://www.python.org/) installed.

It is recommended to use a [Linux](https://www.linux.org/) OS that is not your host machine. The challenges have been tested using Ubuntu 16.04.4.

### Set-up

1. Clone the sample app GitHub repo.

```
git clone git@github.com:IBM/get-started-openapi.git
```

2. On the command line, change the directory to where the sample app is located.

```
cd get-started-openapi
```

3. Install the dependencies listed in the [package.json](https://docs.npmjs.com/files/package.json) to run the app locally. 

```
npm install
```

4. Run the app.

```
npm start
```
You should be able to view the app at http://localhost:3000, and add and view entries.

## OpenAPI Experience

Now that you have set-up your development environment, it is time to "kick the tires" by jumping into the [OpenAPI Experience](docs/openAPIExperience.md). Good luck!

## Conclusion

This is a v1 release of the guide and we plan to continue improving it. We would love feedback. If you have any suggestions or find a defect with the code, please open an issue or submit a Pull Request to the repository.
