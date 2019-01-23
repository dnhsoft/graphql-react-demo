# graphql-react-demo

```
npm install -g graphcool
cd api
graphcool local up
graphcool deploy
graphcool info
```

Create a .env.development.local file in the admin-panel/frontend directory, then write two variables in it (replace the ??? with the hash printed from the graphcool command output:

```
REACT_APP_GRAPHQL_URL='http://localhost:60000/simple/v1/???'
REACT_APP_GRAPHQL_SUBSCRIPTIONS_URL='ws://localhost:60000/subscriptions/v1/???'
```

Then start the admin panel docker compose: 
```
cd ..
cd admin-panel
docker-compose up
```

Please be patient while the app is built. 
Open the running app at http://localhost:3001
