const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  profile_image: String,
  cloudinary_id: String
});

module.exports = mongoose.model('User', userSchema);