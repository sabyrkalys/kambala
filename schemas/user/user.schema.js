const {Schema, model} = require('mongoose')

const userSchema = new Schema ({
  login: { type: String, required: true, unique: true  },
  email: { type: String, required: true, unique: true  },
  password: { type: String, required: true },
  profile: {
    name: { type: String  },
    lastName: { type: String },
    patronymic: { type: String },
    DOB:{ type: String },
    NameOrganization: {type: String},
    sybDivision:{type: String},
    Position: {type: String},
    phone: {type: String}
  },
  profileStatus: { type: Number, required: true, default: 0  },
  accessToken: { type: String },
  refreshToken: { type: String },

})

module.exports = model('User', userSchema)
