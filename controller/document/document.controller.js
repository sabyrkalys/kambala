const documentModel = require('../../models/document/document.model.js');
const {AuthService} = require('../../classes');
const auth = new AuthService;

exports.index = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.params.userId) {
      res.render('myDocument', {
       title: 'Список документов',
       isAddRegulat: true,

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
      const result = await documentModel.index(docId);
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
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.updateDocumentHeader = async function (req, res) {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.setDocumentBody_1 = async (req, res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
    if (req.body.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_1(req);
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.setDocumentBody_2 = async (req, res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
    if (req.body.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_2(req);
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.setDocumentBody_3 = async (req, res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
    if (req.body.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_3(req);
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.setDocumentBody_4 = async (req, res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
    if (req.body.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_4(req);
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.setDocumentBody_5 = async (req, res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
    if (req.body.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.setDocumentBody_5(req);
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.saveDocument = async (req, res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
    if (req.body.action === 'create' || req.query.action === 'edit') {
      try {
        const result = await documentModel.saveDocument(req);
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.sendDocument = async (req, res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
    try {
      const result = await documentModel.sendDocument(req);
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.confirmDocument = async (req,res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
    try {
      const result = await documentModel.confirmDocument(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        return res.status(200).send({result})
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send();
    }
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.createWord = async (req,res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}

exports.createPdf = async (req,res) => {
  //let isLogined = await auth.check(req.session);
  //if (isLogined) {
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
  //}
  //else {
  //  res.status(401).send(isLogined);
  //}
}
