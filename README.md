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
curl -v -H "Authorization: Bearer a5801a9b65494cec810329e70105f755bcd491d21b532c5ee95af76e14ce37c9156a333a417306d54013765908e87c19a139658e496ed7094c0a5e7d9ab6fc54" \
http://express-api.dev/api/v1/users
```
