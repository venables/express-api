# express-api

## Installation

```
./bin/setup
```

## cURL Commands


### 1. Sign up

```
curl -v -X POST -H "Content-Type: application/json" \
 -d '{ "email": "matt@jog.fm", "password": "testing1234" }' \
 http://express-api.dev/api/v1/users
```

### 2. Sign in

```
curl -v -X POST -H "Content-Type: application/json" \
 -d '{ "email": "matt@jog.fm", "password": "testing1234" }' \
 http://express-api.dev/api/v1/sessions
```
