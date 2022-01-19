const pdf = require('html-pdf');
const fs = require('fs');

class PdfConvertor {
  docId = '';
  options = { format: 'Letter' }

  constructor(docId) {
    this.docId = docId;
  }

  convert(){
    const html = fs.readFileSync(`files/${this.docId}.html`, "utf8");
    return pdf.create(html, this.options)
  }

}

module.exports = PdfConvertor;
