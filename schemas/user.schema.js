const {Schema, model} = require('mongoose')

const regulatSchema = new Schema ({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  accessToken: { type: Schema.Types.ObjectId },
  refreshToken: { type: Schema.Types.ObjectId },
})
