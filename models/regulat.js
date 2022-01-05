const {Schema, model} = require('mongoose')

const regulatSchema = new Schema ({
// autherId:{
//  type: Schema.Types.ObjectId,
//  ref: 'User',
//  required:true
// },
//title: {
// type: String,
// required: true
//},
//data: {
// type: new Data.now,
// required: true
//},
//status: String,
regDocument: {
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
  subRegulat_1: {
   items: [
    {
     nameOrgan1:{
      type:String
     },
     nameService1:{
      type:String
     },
     nameOrgan2:{
      type:String
     },
     nameService2:{
      type:String
     },
    }
   ]
  },
  //subRegulat_2_2_1: {
  // items: [
  //  {
  //   nameOrgan1:{
  //    type:String
  //   }
  //  }
  // ]
  //},
  //subRegulat_2_2_2: {
  // items: [
  //  {
  //   nameOrgan1:{
  //    type:String
  //   }
  //  }
  // ]
  //},
  //subRegulat_2_3: {
  // items: [
  //  {
  //   nameOrgan1:{
  //    type:String
  //   }
  //  }
  // ]
  //}

 }

})
module.exports = model('Regulat', regulatSchema)