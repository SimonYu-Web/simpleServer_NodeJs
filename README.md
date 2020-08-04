1. Create an api server provide following endpoints
 GET /people            get all people
 POST /people           post a new person (must include name property)
 GET /people?name=xxx   filter response by name

2. In the response header, include a custom header, X-time, shows the time of the request received.


npm init -y
npm i express
npm i -D nodemon
npm run dev
express
