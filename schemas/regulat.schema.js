const {Schema, model} = require('mongoose')

const regulatSchema = new Schema ({
 authorId:{ type: Schema.Types.ObjectId, ref: 'User', required:true },
 title: { type: String, required: true },
 dateСreate: { type : Date, default: Date.now, required: true },
 status: { type: Number, default: 0, required: true },
 step: { type: Number, default: 0, required: true },
 versions: [{
   version: { type: Number, default: 1, required: true },
   dateUpdate: { type: Date, default: Date.now, required: true }
 }],
 regDocument: {
   headDOC:{
      headerTitle: { type:String, required: true },
      deliveryDoc: { type:String, required: true },
      servicy: { type:String, required: true }
  },
  subRegulat_1_1_1: {
     items: [{
       nameOrgan1: { type:String },
       nameService1: { type:String },
       nameOrgan2: { type:String },
       nameService2: { type:String },
      }]
  },
  // subRegulat_2_1_1: {
  //    items: [{
  //      nameOrgan1: { type:String }
  //     }]
  // },
  // subRegulat_2_2_2: {
  //  items: [{
  //    nameOrgan1: { type:String }
  //   }]
  // },
  // subRegulat_2_3: {
  //    items: [{
  //      nameOrgan1: { type:String }
  //   }]
  // }
 }

})
module.exports = model('Regulat', regulatSchema)


// regDocument: {
//   headDOC:{
//    headerTitle: {
//     type:String,
//     required:true
//    },
//    deliveryDoc:{
//     type:String,
//     required:true
//    },
//    servicy:{
//     type:String,
//     required:true
//    }
//   },
//   subRegulat_1: {
//    items: [
//     {
//      nameOrgan1:{
//       type:String
//      },
//      nameService1:{
//       type:String
//      },
//      nameOrgan2:{
//       type:String
//      },
//      nameService2:{
//       type:String
//      },
//     }
//    ]
//   },
//   subRegulat_2_2_1: {
//    items: [
//     {
//      nameOrgan1:{
//       type:String
//      }
//     }
//    ]
//   },
//   subRegulat_2_2_2: {
//    items: [
//     {
//      nameOrgan1:{
//       type:String
//      }
//     }
//    ]
//   },
//   subRegulat_2_3: {
//    items: [
//     {
//      nameOrgan1:{
//       type:String
//      }
//     }
//    ]
//   }
//
//  }
