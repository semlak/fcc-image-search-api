This is a small microservice app that I have completed for an assignment through the freecodecamp.com cirriculum. The assignment, described at http://www.freecodecamp.com/challenges/image-search-abstraction-layer, is to create an api that allows you to search for images. 

**NOTE: I used Bing Search API to power my image search results. You will need to setup with BING and get an API key or modify code to interact with a differert provider.

The userstories are the following: 


User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.

User Story: I can get a list of the most recently submitted search strings.

# Quick Start Guide

### Prerequisites

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Git](https://git-scm.com/)
- A Bing search API setup for images, and its API key. 


To obtain code, in bash, run:
$ git clone https://github.com/semlak/fcc-image-search-api.git your-project

which will download to the 'your-project', which will be created in the process.
For running locally, you will need to have the following environmental variables set via the .env file, which is not included and which you need to create.

.env contents:
MONGO_URI=mongodb://localhost:27017/image-search
API_KEY=<YOUR BING API KEY>

(note: you can choose your own url for mongodb. This is an example)

If you are deploying to heroku, you will set environmental variables differently, and you will also need some sort of mongoDB module, such as MongoLab and an associated API_KEY.


#running app
before running the first time, you need to run the following command in the project directory:
$ npm install

(You shouldn't need to run with root privledges. )

Assunming you don't have any problems, you need a mongoDB process running.

You would run a command such as 
$ mongod --smallfiles

In another terminal window, you can run the server:
$ npm start
  or
$ node server

Or you can run tests (the node server should not currently be running, but you will need mongod running:
$ npm test
  or
$ node jasmine-node spec/TESTFILE



#HEROKU
you should probably research deploying heroku apps rather than relying on my documentation. For me, after creating my app and have heroku-toolbelt or similar instaled, and have heroku setup, I run:
$ heroku create fcc-image-search-api
for any environmental variables to set, you aren't using .env, so you use a command such as:
heroku config:add API_KEY='YOUR_API_KEY'




