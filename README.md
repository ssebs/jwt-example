# jwt-example

React / Flask JWT example project

This repo contains sample code to get basic JWT working with React and Flask.

The frontend code is in the root dir, and the backend code is in the _backend dir.

## Dependencies
- Python
  - flask
  - flask_cors
  - flask_jwt_extended
- npm
  - jwt-decode
  - react-router-dom

## Installing 
> Assumes you're using some flavor of linux 
```bash
$ git clone https://github.com/ssebs/jwt-example
$ cd jwt-example/
$ npm install
$ pip install flask flask_cors flask_jwt_extended
```

## Running
- Open up two terminals
  - Python
  ```bash
  $ cd jwt-example/_backend/
  $ python server.py
  ```
  - NPM
  ```bash
  $ cd jwt-example/
  $ npm start
  ```

## Building
You should not be building this project, this is basically just a demo.