import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  }
});

// Apply the plugin: the field 'userId' will auto‑increment
userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const User = mongoose.model('user', userSchema);

export default User;
