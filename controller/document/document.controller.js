const documentModel = require('../../models/document/document.model.js');
const {AuthService} = require('../../classes');
const User = require('../../schemas/user/user.schema')
const auth = new AuthService;

function mapDocItems(doc) {
 return doc.items.map(c => ({
  ...c.documentId
 }))
}

exports.index = async (req, res) => {
  let isLogined = await auth.check(req.session);
  // определяем пользователя 
  const user = await User.findById(req.params.userId).lean();
  // определяем документы созданные пользователем
  const userDoc = await User.findById(req.params.userId).populate('documents.items.documentId').lean();
  const docs = await userDoc.documents
  const documents = mapDocItems(docs);
  const findStatus = documents.filter(c => c.status == 2);
  // определеяем документы которые необходимо проверить пользователю
  const docsW = await User.findById(req.params.userId).populate('accessDocuments.items.documentId').lean();
  const docWatch = mapDocItems(docsW.accessDocuments);
  
  if (isLogined) {
    if (req.params.userId) {
      res.render('myDocument', {
       title: 'Список документов',
       id: user._id,
       isRegulat: true,
       user,
       documents,
       docWatch,
       findStatus
      })
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
  const user = await User.findById(req.params.userId).lean();
  if (isLogined) {
    if (req.params.docId) {
      const docId = req.params.docId;
      try {
        const result = await documentModel.index(docId);
        if (!result) {
          return res.status(404).send();
        }
        else {
          res.render('addDocument', {
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
      res.render('addDocument', {
       title: 'Создать регламент',
       isAddRegulat: true,
       user
      })
    }
  }
  else {
    res.status(401).send(isLogined);
  }
}

exports.editDocument = async (req, res) => {
 const user = await User.findById(req.params.userId).lean();
  if (req.params.docId) {
    const docId = req.params.docId;
    try {
      const result = await documentModel.index(docId);
      const authorId = await User.findById(result.authorId).lean();
      if (!result) {
        return res.status(404).send();
      }
      else {
        res.render('addDocument', {
         title: 'Редактировать документ',
         isEditRegulat: true,
         documentData: result,
         user,
         authorId
        })
      }
    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    res.render('addDocument', {
     title: 'Создать регламент',
     isAddRegulat: true,
     user
    })
  }
}

exports.setDocumentHeader = async function (req, res) {

  let isLogined = await auth.check(req.session);
  if (isLogined) {
   if (req.query.action === 'create') {
      try {
        const result = await documentModel.setDocumentHeader(req);

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
  else {
    res.status(401).send(isLogined);
  }
}

exports.updateDocumentHeader = async function (req, res) {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.query.action === 'edit') {
      try {
        const result = await documentModel.updateDocumentHeader(req);
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
  else {
    res.status(401).send(isLogined);
  }
}

exports.setDocumentBody_1 = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.query.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_1(req);
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
  else {
    res.status(401).send(isLogined);
  }
}

exports.setDocumentBody_2 = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.query.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_2(req);
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
  else {
    res.status(401).send(isLogined);
  }
}

exports.setDocumentBody_3 = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.query.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_3(req);
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
  else {
    res.status(401).send(isLogined);
  }
}

exports.setDocumentBody_4 = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.query.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_4(req);
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
  else {
    res.status(401).send(isLogined);
  }
}

exports.setDocumentBody_5 = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.query.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_5(req);
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
  else {
    res.status(401).send(isLogined);
  }
}

exports.saveDocument = async (req, res) => {
  let isLogined = await auth.check(req.session);
  const user = await User.findById(req.params.userId);
  if (isLogined) {
    if (req.query.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.saveDocument(req);
        if (!result) {
          return res.status(404).send();
        }
        else {
          await user.addDocument(result);
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
  else {
    res.status(401).send(isLogined);
  }
}

exports.sendDocument = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    try {
      const result = await documentModel.sendDocument(req);
      if (!result) {
        return res.status(500).send();
      }
      else {
        return res.status(500).send({result});
      }

    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  }
  else {
    res.status(401).send(isLogined);
  }
}

exports.confirmDocument = async (req,res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    try {
      const result = await documentModel.confirmDocument(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        return res.status(200).redirect(`/user/${req.params.userId}/document`)
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send();
    }
  }
  else {
    res.status(401).send(isLogined);
  }
}

exports.createWord = async (req,res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    try {
      const result = await documentModel.createWord(req)
      if (!result) {
        return res.status(404).send();
      }
      else {
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=document.docx`);
        res.setHeader('Content-Length', result.length);
        return res.status(200).send(result);
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send();
    }
  }
  else {
    res.status(401).send(isLogined);
  }
}

exports.createPdf = async (req,res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    try {
      const result = await documentModel.createPdf(req);

      if (!result) {
        return res.status(404).send();
      }
      else {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=document.pdf')
        result.toBuffer(function(err, buffer){
          if (err) {
            console.log(err);
            return res.status(404).send();
          }
          else {
            return res.status(200).send(buffer)
          }
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send();
    }
  }
  else {
    res.status(401).send(isLogined);
  }
}
