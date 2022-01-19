const createHTML = require('create-html');
const fs = require('fs');
const style = fs.readFileSync(__dirname + "/style.css", "utf8");


class HtmlConvertor {
  docId = '';
  title = 'Документ';
  body = '';
  lang = 'ru';

  documentData = {};

  constructor(docId,documentData) {
    this.docId = docId;
    this.documentData = documentData;
  }

  setStyle(){
    this.body = `
      <style>${style}</style>
    `
  }

  startDocument(){
    this.setStyle();
    this.body +=`
      <main class="main">
        <section class="commetRegulat">
          <div class="wrapper myRegulat__wrapper">
            <div class="commetRegulat__container">
              <div class="accardion commetRegulat-item commetRegulat__item commetRegulat__item_left">`;

  }

  setDocumentHeader(){
    this.body += `
      <div class="commetRegulat-item__header commetRegulat-item-header">
        <div class="commetRegulat-item-header__container">
    `

    this.body += `
      <div class="commetRegulat-item-header__right">
        <p class="commetRegulat-desc commetRegulat-item-header__header-doc">${this.documentData.headDOC.headerTitle}</p>
      </div>
      <span class="commetRegulat-item-header__title">АДМИНИСТРАТИВНЫЙ РЕГЛАМЕНТ</span>
      <p class="commetRegulat-item-header__desc">Предоставления ${this.documentData.headDOC.deliveryDoc} услуги "${this.documentData.headDOC.servicy}"</p>
    `

    this.body += `
        </div>
      </div>
    `
  }

  setBody_1(){
    this.body += `
      <div class="accardion-item commetRegulat-item-body">
        <div class="section-header section-header--mb2">
          <h2 class="section-header__title section-header__title_fz18">1. Общие положения</h2>
        </div>
        <div class="accardion-content commetRegulat-item-content">
          <div class="commetRegulat-item-body__content">
            <div class="commetRegulat-item-body-title commetRegulat-item-body__title">1. Предмет регулирования Административного регламента</div>
    `;
    
    this.body += `
          </div>
        </div>
      </div>
    `;
  }

  endDocument(){
    this.body += `
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  createDocument() {
    this.startDocument();
    this.setDocumentHeader();
    this.setBody_1();
    this.endDocument();

    const html = createHTML({
      title: this.title,
      head: this.head,
      lang: this.lang,
      css: this.css,
      body: this.body,
    })

    try {
      fs.writeFile(`files/${this.docId}.html`, html, function (err) {
        if (err) {
          console.log(error);
        }
      });

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }

  }

}

module.exports = HtmlConvertor;
