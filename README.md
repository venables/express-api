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
curl -v -X GET \
-H "Authorization: Bearer b4c0be7aaaa03aeb5b5b089c464574f1bcab7556865893946de96f30335e098361a464ad6b241f0166c2578f9de995cc910a5945eee2b675dd4ed8e8c812531c" \
http://express-api.dev/api/v1/users
```

### Find User

```
curl -v -X GET \
-H "Authorization: Bearer b4c0be7aaaa03aeb5b5b089c464574f1bcab7556865893946de96f30335e098361a464ad6b241f0166c2578f9de995cc910a5945eee2b675dd4ed8e8c812531c" \
http://express-api.dev/api/v1/users/ff097f5e-a6a6-4d8e-b9bf-f5b3e2107077
```

### Sign out

```
curl -v -X DELETE \
-H "Authorization: Bearer 79f26441dfd1d106345f2d8817fca8895bf2906f990a7cf1aa3a227c51feadbd7001c1a186b7074a64eb89de5af2bce9745d6507ff293eb8115da51372090e1e" \
http://express-api.dev/api/v1/sessions
```
