const {Schema, model} = require('mongoose')

const documentSchema = new Schema ({
 authorId:{ type: Schema.Types.ObjectId, 
  ref: 'User', required:true },
 title: { type: String, required: true },
 dateСreate: { type : Date, default: Date.now, required: true },
 status: { type: Number, default: 0, required: true },
 step: { type: Number, default: 0, required: true },
 viewToken: { type: Schema.Types.ObjectId },
 commentsUsers: [{
  userId: { 
   type: Schema.Types.ObjectId,
   ref: 'User',
   required:true,
   },
  
  comments: [{
    selectedString: { type: String, required: true },
    comment: { type: String, required: true },
  }]
}],
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
  regulat_1: {
    subRegulat_1_1:{
      items: [{
        paragraph:{ type:String, required: true },
        nameOrgan1: { type:String, required: true },
        nameService1: { type:String, required: true },
        nameOrgan2: { type:String, required: true },
        nameService2: { type:String, required: true },
       }]
    },
    subRegulat_1_2:{
      items: [{
       paragraph:{ type:String, required: true },
       fieldName: { type: String, required: true }
       }]
    },
    subRegulat_1_3:{
      items: [{
       paragraph:{ type:String, required: true },
       fieldName: { type: String, required: true }
       }]
    }
  },
  regulat_2: {
    subRegulat_2_1:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_2:{
     items: [ {
      item_2_2_1 : [{
       paragraph:{ type:String, required: true },
       fieldName: { type: String, required: true }
      }],
      item_2_2_2 : [{
       paragraph:{ type:String, required: true },
       fieldName: { type: String, required: true }
      }]
     }]
    },
    subRegulat_2_3:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_4:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_5:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_6:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_7:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_8:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_9:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_10:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_11:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_12:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_13:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_14:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_15:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_16:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_17:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_18:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
    subRegulat_2_19:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
  },
  regulat_3: {
    subRegulat_3_1:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
  },
  regulat_4: {
    subRegulat_4_1:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
  },
  regulat_5: {
    subRegulat_5_1:{
      items: [{
        paragraph:{ type:String, required: true },
        fieldName: { type: String, required: true }
      }]
    },
  },
 }

})
module.exports = model('Document', documentSchema)
