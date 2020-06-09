const User = require('../../models/user');
const Bookings = require('../../models/bookings');

module.exports = {
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
        user: '5ed9d76156d1a326523eeee8'
      });

      const result = await booking.save();
      return { ...result._doc }
    } catch (error) {
      throw error;
    }
  }
}