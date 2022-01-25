const {Schema, model} = require('mongoose')

const userSchema = new Schema ({
  login: { type: String, required: true, unique: true  },
  email: { type: String, required: true, unique: true  },
  password: { type: String, required: true },
  profile: {
    name: { type: String  },
    lastName: { type: String },
    patronymic: { type: String },
  },
  profileStatus: { type: Number, required: true, default: 0  },
  accessToken: { type: String },
  refreshToken: { type: String },
  accessDocuments: {
    items:[{
      documentId: {type: Schema.Types.ObjectId},
    }]
  }
})

module.exports = model('User', userSchema)
