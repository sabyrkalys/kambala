const htmlDocx = require('html-docx-js');
const fs = require('fs');

class WordConvertor {
  docId = '';

  constructor(docId) {
    this.docId = docId;
  }

  convert(){
    const html = fs.readFileSync(`files/${this.docId}.html`, "utf8");
    return htmlDocx.asBlob(html);
  }

}

module.exports = WordConvertor;
