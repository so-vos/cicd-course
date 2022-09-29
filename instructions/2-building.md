## Assignment 2: Building

#### 2.1 Npm build

NPM (Node Package Manager) allows us to automate our build in a standardized manner. 
We will be executing a number of build phases to demonstrate how NPM works.

1. Validate that npm is correctly installed by running the following command:
    ```
    $ npm --version
    ```
    It should print out the version if the npm installation was correct.
2. After a first checkout build the project and download its dependencies by running:
```
$ npm install 
```

More available commands can be found in the `package.json` file in the root of the project. 
You will need them later to perform the assignments below.

```
$ npm run <command>
```

**Note**: Try to fix any problems indicated by the build.

1.  Build the application
2.  Build the application and run unit tests. What tests do you see being run?
3.  If a test fails try and fix it.
4.  Commit and push any changes to your build.

 
#### 2.2 Running the application

The application is a simple HTML + Javascript application which shows a demo page.

1. To see if the project works you can run:

```
$ npm run start
```

It should open up your browser and show you the page. If this does not work navigate to http://localhost:3000 .


#### 2.3 Code quality metrics with SonarQube

In order to monitor the code quality of our build, we will be using [SonarQube](https://www.sonarqube.org) during this workshop. 

1.  Login to the existing SonarQube instance using your browser. You can find the url at step 3. The credentials are `read-only:read-only`.
2.  Go into your package.json and change the name of your project to something like: "cicd-workshop-github-actions-[firstname]" and replace [firstname] with your real first name. You can use this name later on to find your project within SonarQube.
3.  Create a file called `.env` in the root of your project. Add the following two environment variables:
```
SONAR_URL=http://cdkfa-sonar-qbn4svxblkcs-1832994807.eu-west-1.elb.amazonaws.com
SONAR_TOKEN=e344d483667dc5114d64a3c641e08bc3f03fdc55
```

4.  Execute npm again, this time performing a full build and SonarQube analysis: `npm run build && npm run push-sonar`.
5.  After a minute, you can visit the SonarQube dashboard, and it will show you the analysis of your project.
    Explore the UI and see if you can find the largest issues with the current build.
6.  Find out which goal you need to run to have get test coverage reports in SonarQube for your project.

#### 2.4 SonarLint (optional)

We want to get feedback on the build as early as possible. In order to prevent developers from having to run an analysis on SonarQube, we can also use something like [SonarLint](https://plugins.jetbrains.com/plugin/7973-sonarlint) in IntelliJ. You can install the plugin from the plugins library. 

1.  After the installation of the plugin.  
2.  Go to `IntelliJ IDEA > Preferences > Tools > SonarLint` and configure SonarLint to use the same rules as your SonarQube server.
2.  Right-click on the [src root](/src) of your project and choose `SonarLint > Analyze with SonarLint`.
3.  Fix any issues that come up.
4.  Re-run the SonarLint analysis and then commit your changes.
    Verify that SonarQube does not flag the issues anymore by running an additional `npm run push-sonar`.
