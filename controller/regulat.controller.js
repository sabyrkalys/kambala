const regulatModel = require('../models/regulat.model.js');


exports.index = async (req, res) => {
  if (req.params.docId) {
    const docId = req.params.docId;
    try {
      const result = await regulatModel.index(docId);
      if (!result) {
        return res.status(404).send();
      }
      else {
        res.render('addRegulat', {
         title: 'Создать регламент',
         isAddRegulat: true,
         documentData: result,
        })
      }
    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    res.render('addRegulat', {
     title: 'Создать регламент',
     isAddRegulat: true
    })
  }

};


exports.setDocumentHeader = async function (req, res) {
 if (req.body.headDOC.action === 'create') {
  try {
    const result = await regulatModel.setDocumentHeader(req);
    if (!result) {
     return res.status(404).send();
    }
    else {
     return res.status(200).send({result})
    }
    
   } catch (e) {
    console.log(e);
    res.status(500).send()
   }
 }
 else {
  return res.status(400).send();
}
}

exports.updateDocumentHeader = async function (req, res) {
if (req.query.action === 'edit') {
 try {
   const result = await regulatModel.updateDocumentHeader(req);
   if (!result) {
     return res.status(404).send();
   }
   else {
     return res.status(200).send({result})
   }

 } catch (e) {
   console.log(e);
   res.status(500).send()
 }
}
else {
 return res.status(400).send();
}
}

exports.setDocumentBody_1 = async (req, res) => {
  if (req.body.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_1(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        return res.status(200).send({result});
      }

    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    return res.status(400).send();
  }
}

exports.setDocumentBody_2 = async (req, res) => {
  if (req.body.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_2(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        return res.status(200).send({result});
      }

    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    return res.status(400).send();
  }
}

exports.setDocumentBody_3 = async (req, res) => {
  if (req.body.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_3(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        return res.status(200).send({result});
      }

    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    return res.status(400).send();
  }
}

exports.setDocumentBody_4 = async (req, res) => {
  if (req.body.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_4(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        return res.status(200).send({result});
      }

    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    return res.status(400).send();
  }
}

exports.setDocumentBody_5 = async (req, res) => {
  if (req.body.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_5(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        return res.status(200).send({result});
      }

    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    return res.status(400).send();
  }
}

exports.saveDocument = async (req, res) => {

  if (req.body.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.saveDocument(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        return res.status(200).send({result});
      }

    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    return res.status(400).send();
  }
}

exports.sendDocument = async (req, res) => {
    try {
      const result = await regulatModel.sendDocument(req);
      if (!result) {
        return res.status(500).send();
      }
      else {
        return res.status(200).send({result});
      }

    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
}
