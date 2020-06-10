const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    email: String!
    password: String!
  }

  type Booking {
    _id: ID!
    source: String!
    destination: String!
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    email: String!
    password: String!
  }

  input BookingInput {
    source: String!
    destination: String!
    user: String!
  }

  type RootQuery {
    user(_id: String): User
    users: [User!]
    booking(_id: String): Booking
    bookings: [Booking!]
  }

  type RootMutation {
    createUser(userInput: UserInput): User
    createBooking(bookingInput: BookingInput): Booking
  }

  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`)