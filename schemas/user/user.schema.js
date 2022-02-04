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
    position: {type: String},
    phone: {type: String}
  },
  documents: {
   items: [
    {
     documentId:{
     type: Schema.Types.ObjectId,
     ref: 'Document',
     required:true
     }
    }
   ]
  },
  profileStatus: { type: Number, required: true, default: 0  },
  accessToken: { type: String },
  refreshToken: { type: String },
  accessDocuments: {
    items:[{
      documentId: {
       type: Schema.Types.ObjectId,
       ref: 'Document',
       required:true
      },
      
    }]
  }
})

userSchema.methods.addDocument = function(document) {
 const items = [...this.documents.items];
 items.push({
  documentId:document._id
 })
 //const idx = items.findIndex(c => {
 // return c.courseId.toString() === document._id.toString();
 //})
 
 //if(idx) {
 // return true
 //} else {
  
 //}
 this.documents = {items};
 return this.save();
}


module.exports = model('User', userSchema)
