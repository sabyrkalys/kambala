const regulatModel = require('../../models/document/document.model.js');
const {AuthService} = require('../../classes');
const auth = new AuthService;

exports.index = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.params.userId) {
      res.render('myRegulat', {
       title: 'Список документов',
       isAddRegulat: true,

      })
      console.log(req.session);
    }
    else {
      res.redirect('/');
    }
  }
  else {
    res.redirect('/');
  }
};

exports.createDocument = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
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
  }
  else {
    res.status(401).send(isLogined);
  }
}

exports.editDocument = async (req, res) => {
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
}


exports.setDocumentHeader = async function (req, res) {
  if (req.query.action === 'create') {
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
      console.log(result);
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
  if (req.query.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_1(req);
      console.log(result);
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
  if (req.query.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_2(req);
      console.log(result);
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
  if (req.query.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_3(req);
      console.log(result);
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
  if (req.query.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_4(req);
      console.log(result);
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
  if (req.query.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.setDocumentBody_5(req);
      console.log(result);
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
  if (req.query.action === 'create' || req.query.action === 'edit') {
    try {
      const result = await regulatModel.saveDocument(req);
      console.log(result);
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
