# GraphQL-NodeJs-MongoDB

To start this project run these commands
```
npm install
npm run start
```
open project in browser using url localhost:5050/graphql

## Create User
```
mutation {
  createUser(userInput: {email: "newemail@test.com", password: "testPWD"}) {
    _id
    email
    password
  }
}
```

## Create Booking
```
mutation {
  createBooking(bookingInput: {source: "Bengaluru", destination: "chennai", user: "<USER_ID>"}) {
    _id
    source
    destination
		user {
      _id
      email
      password
    }
    createdAt
    updatedAt
  }
}
```
**Note**
<USER_ID> replace this with user id, you can get it from db.


## Get All Users
```
query {
  users {
    _id
    email
    password
  }
}
```

## Get user by ID
```
query {
  user(_id: "<USER_ID>") {
    _id
    email
    password
  }
}
```
**Note**
<USER_ID> replace this with user id, you can get it from db.

## Get All Bookings
```
query {
  bookings {
    _id
    source
    destination
    user {
      _id
      email
      password
    }
    createdAt
    updatedAt
  }
}
```

## Get Booking by ID
```
query {
  booking(_id: "<BOOKING_ID>") {
    _id
    source
    destination
		user {
      _id
      email
      password
    }
    createdAt
    updatedAt
  }
}
```
**Note**
<BOOKING_ID> replace this with booking id, you can get it from db.



