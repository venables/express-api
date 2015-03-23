# express-api

## Installation

```
./bin/setup
```

## cURL Commands


### Sign up

```
curl -v -X POST -H "Content-Type: application/json" \
 -d '{ "email": "matt@jog.fm", "password": "testing1234" }' \
 http://express-api.dev/api/v1/users
```

### Sign in

```
curl -v -X POST -H "Content-Type: application/json" \
 -d '{ "email": "matt@jog.fm", "password": "testing1234" }' \
 http://express-api.dev/api/v1/sessions
```

### User lists

```
curl -v http://express-api.dev/api/v1/users
```
