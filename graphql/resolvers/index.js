const User = require('../../models/user');
const Bookings = require('../../models/bookings');

module.exports = {
  user: async(args) => {
    try {
      const user = await User.findById(args._id);
      return user;
    } catch (error) {
      throw error;
    }
  },

  users: async() => {
    try {
      const users =  await User.find();
      return users.map(user => {
        return { ...user._doc, _id: user.id };
      })
    } catch (error) {
      throw error;
    }
  },

  booking: async(args) => {
    try {
      const booking = await Bookings.findById(args._id);
      const user = await User.findById(booking.user._id.toString());
      return { ...booking._doc, user };
    } catch (error) {
      throw error;
    }
  },

  bookings: async() => {
    try {
      const bookings = await Bookings.find();
      return bookings.map(async booking => {
        const user = await User.findById(booking.user)
        return { ...booking._doc, _id: booking.id, user: user._doc }
      })
    } catch (error) {
      throw error;
    }
  },

  createUser: async (args) => {
    try {
      const user = new User({
        email: args.userInput.email,
        password: args.userInput.password
      })
  
      const result = await user.save();
      return {...result._doc, _id: result._doc._id.toString()};
    } catch (error) {
     throw error; 
    }
  },

  createBooking: async (args) => {
    try {
      const booking = new Bookings({
        source: args.bookingInput.source,
        destination: args.bookingInput.destination,
        user: args.bookingInput.user
      });

      console

      const result = await booking.save();
      const user = await User.findById(args.bookingInput.user);
      return { ...result._doc, user: user }
    } catch (error) {
      throw error;
    }
  }
}