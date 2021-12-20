const {Schema, model} = require('mongoose')

const regulatSchema = new Schema ({
title: {
 type: String,
 required: true
},
data: {
 type: new Data.now,
 required: true
},
status: String,
regDocument: [
 {
  headDOC:{
   headerTitle: {
    type:String,
    required:true
   },
   deliveryDoc:{
    type:String,
    required:true
   },
   servicy:{
    type:String,
    required:true
   }
  },
  subRegulat: {
   items: [
    {
     nameOrgan:{
      type:String
     },
     nameService:{
      type:String
     },
     nameService:{
      type:String
     }
    }
   ]
  }

 }
]

})
module.exports = model('Regulat', regulatSchema)