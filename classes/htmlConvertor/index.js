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
      <p class="commetRegulat-item-header__desc">ПРЕОДОСТАВЛЕНИЯ ${this.documentData.headDOC.deliveryDoc} УСЛУГИ "${this.documentData.headDOC.servicy}"</p>
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
             const subRegulat_1_1 = this.documentData.regulat_1.subRegulat_1_1.items;
            for (let c in subRegulat_1_1) {
             this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_1_1[c].paragraph} Административный регламент устанавливает стандарт предоставления ${subRegulat_1_1[c].nameOrgan1} услуги ${subRegulat_1_1[c].nameService1}, состав, последовательность и сроки выполнения административных процедур по предоставлению ${subRegulat_1_1[c].nameOrgan2} услуги, ${subRegulat_1_1[c].nameService2}</p>`
            }
            this.body+= `</div><div class="commetRegulat-item-body__content">
            <div class="commetRegulat-item-body-title commetRegulat-item-body__title">1.2. Круг заявителей</div>
            <p class="commetRegulat-item-body__desc commetRegulat-desc section-header--mb2">1.2.1 Лицами, имеющими право на получение Муниципальной услуги, являются субъекты малого и среднего предпринимательства (далее – субъекты МСП), зарегистрированные и состоящие на учете в налоговых органах на территории городского округа, осуществляющие деятельность на территории городского округа, либо их уполномоченные представители, обратившиеся с запросом о предоставлении Муниципальной услуги</p>
    `;
             const subRegulat_1_2 = this.documentData.regulat_1.subRegulat_1_2.items;
            for (let c in subRegulat_1_2) {
             this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_1_2[c].paragraph} ${subRegulat_1_2[c].fieldName}</p>`
            }
            this.body+= `</div><div class="commetRegulat-item-body__content">
            <div class="commetRegulat-item-body-title commetRegulat-item-body__title">1.3. Требования к порядку
            информирования о предоставлении муниципальной услуги</div>
            <p class="commetRegulat-item-body__desc commetRegulat-desc section-header--mb2">1.3.1 Порядок получения
            информации
            Заявителями по вопросам предоставления услуги и услуг, которые являются необходимыми и обязательными для
            предоставления услуги, сведений о ходе предоставления указанных услуг, в том числе на официальном сайте, а
            также в федеральной государственной информационной системе "Единый портал государственных и муниципальных
            услуг (функций)" (www.gosuslugi.ru) (далее – Единый портал) и на Портале государственных и муниципальных
            услуг (функций) (www.pgu..ru) (далее – Региональный портал).</p>
            <p class="commetRegulat-item-body__desc commetRegulat-desc section-header--mb2">1.3.2 Порядок, форма, место размещения и способы получения справочной информации, в том числе на стендах в местах предоставления муниципальной услуги и услуг, которые являются необходимыми и обязательными для предоставления муниципальной услуги, и в государственном автономном учреждении "Многофункциональный центр предоставления государственных и муниципальных услуг" (далее – МФЦ).</p>
    `;
             const subRegulat_1_3 = this.documentData.regulat_1.subRegulat_1_3.items;
            for (let c in subRegulat_1_3) {
             this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_1_3[c].paragraph} ${subRegulat_1_3[c].fieldName}</p>`
            }
this.body += `</div>
          </div>
         </div>
         `;
  }
  setBody_2(){
   this.body += `<div class="accardion-item commetRegulat-item-body">
                  <div class="section-header section-header--mb2">
                   <h2 class="section-header__title section-header__title_fz18">2. Стандарт предоставления муниципальной услуги</h2>
                  </div>
                  <div class="accardion-content commetRegulat-item-content">
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;"><div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.1. Наименование муниципальной услуги
                  </div>`
                  
                   const subRegulat_2_1 = this.documentData.regulat_2.subRegulat_2_1.items;
                   for (let c in subRegulat_2_1) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_1[c].paragraph} ${subRegulat_2_1[c].fieldName}</p>`
                   }
                  this.body+=`</div>
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                  <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.2. Наименование органа,
                   предоставляющего муниципальную услугу</div>
                  `
                  const subRegulat_2_2_1 = this.documentData.regulat_2.subRegulat_2_1.items.item_2_2_1;
                   for (let c in subRegulat_2_2_1) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_2_1[c].paragraph} ${subRegulat_2_2_1[c].fieldName}</p>`
                   }
                   const item_2_2_2 = this.documentData.regulat_2.subRegulat_2_1.items.item_2_2_2;
                   for (let c in item_2_2_2) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${item_2_2_2[c].paragraph} ${item_2_2_2[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                  <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.3. Описание результата
                  предоставления муниципальной услуги</div>`

                  const subRegulat_2_3 = this.documentData.regulat_2.subRegulat_2_3.items;
                   for (let c in subRegulat_2_3) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_3[c].paragraph} ${subRegulat_2_3[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                  <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.4. Срок предоставления муниципальной услуги, в том числе с учетом необходимости обращения в организации, участвующие в предоставлении муниципальной услуги, срок приостановления предоставления муниципальной услуги в случае, если возможность приостановления предусмотрена законодательством Российской Федерации, срок выдачи (направления) документов, являющихся результатом предоставления муниципальной услуги</div>`

                   const subRegulat_2_4 = this.documentData.regulat_2.subRegulat_2_4.items;
                   for (let c in subRegulat_2_4) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_4[c].paragraph} ${subRegulat_2_4[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                  <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.5. Нормативные правовые акты,
                  регулирующие предоставление муниципальной услуги</div>`
                  const subRegulat_2_5 = this.documentData.regulat_2.subRegulat_2_5.items;
                   for (let c in subRegulat_2_5) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_5[c].paragraph} ${subRegulat_2_5[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                  <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.6. Исчерпывающий перечень
                  документов, необходимых в соответствии с нормативными правовыми актами для предоставления муниципальной услуги
                  и услуг, которые являются необходимыми и обязательными для предоставления муниципальной услуги, подлежащих
                  представлению заявителем, способы их получения заявителем, в том числе в электронной форме, порядок их
                  представления</div>`
                  const subRegulat_2_6 = this.documentData.regulat_2.subRegulat_2_6.items;
                   for (let c in subRegulat_2_6) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_6[c].paragraph} ${subRegulat_2_6[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                  <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.7. Исчерпывающий перечень
                  документов, необходимых в соответствии с нормативными правовыми актами для предоставления муниципальной услуги,
                  которые находятся в распоряжении государст- венных органов, органов местного самоуправления и иных органов,
                  участвующих в предоставлении государственных и муниципальных услуг, и которые заявитель вправе представить, а
                  также способы их получения заявителями, в том числе в электронной форме, порядок их представления</div>`

                  const subRegulat_2_7 = this.documentData.regulat_2.subRegulat_2_7.items;
                   for (let c in subRegulat_2_7) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_7[c].paragraph} ${subRegulat_2_7[c].fieldName}</p>`
                   }

                   this.body+=`</div>
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                  <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.8. Указание на запрет требовать от
                  заявителя</div>`

                  const subRegulat_2_8 = this.documentData.regulat_2.subRegulat_2_8.items;
                   for (let c in subRegulat_2_8) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_8[c].paragraph} ${subRegulat_2_8[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.9. Исчерпывающий перечень оснований
                   для отказа в приеме документов, необходимых для предоставления муниципальной услуги</div>`

                   const subRegulat_2_9 = this.documentData.regulat_2.subRegulat_2_9.items;
                   for (let c in subRegulat_2_9) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_9[c].paragraph} ${subRegulat_2_9[c].fieldName}</p>`
                   }

                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.10. Исчерпывающий перечень оснований
                   для приостановления или отказа в предоставлении муниципальной услуги</div>`

                   const subRegulat_2_10 = this.documentData.regulat_2.subRegulat_2_10.items;
                   for (let c in subRegulat_2_10) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_10[c].paragraph} ${subRegulat_2_10[c].fieldName}</p>`
                   }

                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.11. Перечень услуг, которые являются необходимыми и обязательными для предоставления муниципальной услуги,в том числе сведения о документе (документах), выдаваемом (выдаваемых) организациями, участвующими в предоставлении муниципальной услуги</div>`

                   const subRegulat_2_11 = this.documentData.regulat_2.subRegulat_2_11.items;
                   for (let c in subRegulat_2_11) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_11[c].paragraph} ${subRegulat_2_11[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.12. Порядок, размер и основания
                   взимания государственной пошлины или иной платы, взимаемой за предоставление муниципальной услуги</div>`

                   const subRegulat_2_12 = this.documentData.regulat_2.subRegulat_2_12.items;
                   for (let c in subRegulat_2_12) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_12[c].paragraph} ${subRegulat_2_12[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.13. Порядок, размер и основания
                   взимания платы за предоставление услуг, которые являются необходимыми и обязательными для предоставления
                   муниципальной услуги, включая информацию о методике расчета размера такой платы</div>`

                   const subRegulat_2_13 = this.documentData.regulat_2.subRegulat_2_13.items;
                   for (let c in subRegulat_2_13) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_13[c].paragraph} ${subRegulat_2_13[c].fieldName}</p>`
                   }
                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.14. Максимальный срок ожидания в
                   очереди при подаче запроса о предоставлении муниципальной услуги, услуги, предоставляемой организацией,
                   участвующей в предоставлении муниципальной услуги, и при получении результата предоставления таких услуг</div>`
                   
                   const subRegulat_2_14 = this.documentData.regulat_2.subRegulat_2_14.items;
                   for (let c in subRegulat_2_14) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_14[c].paragraph} ${subRegulat_2_14[c].fieldName}</p>`
                   }

                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.15. Срок и порядок регистрации
                   запроса заявителя о предоставлении муниципальной услуги и услуги, предоставляемой организацией, участвующей в
                   предоставлении муниципальной услуги, в том числе в электронной форме</div>`

                   const subRegulat_2_15 = this.documentData.regulat_2.subRegulat_2_15.items;
                   for (let c in subRegulat_2_15) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_15[c].paragraph} ${subRegulat_2_15[c].fieldName}</p>`
                   }

                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.16. Требования к помещениям, в
                   которых предоставляется Муниципальная услуга, к залу ожидания, местам для заполнения запросов о предоставлении
                   Муниципальной услуги, информационным стендам с образцами их заполнения и перечнем документов, необходимых для
                   предоставления Муниципальной услуги, в том числе к обеспечению доступности для инвалидов указанных объектов</div>`

                   const subRegulat_2_16 = this.documentData.regulat_2.subRegulat_2_16.items;
                   for (let c in subRegulat_2_16) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_16[c].paragraph} ${subRegulat_2_16[c].fieldName}</p>`
                   }

                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.17. Показатели доступности и
                   качества Муниципальной услуги</div>`

                   const subRegulat_2_17 = this.documentData.regulat_2.subRegulat_2_17.items;
                   for (let c in subRegulat_2_17) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_17[c].paragraph} ${subRegulat_2_17[c].fieldName}</p>`
                   }

                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.18. Требования к организации
                   предоставления Муниципальной услуги в электронной форме</div>`

                   const subRegulat_2_18 = this.documentData.regulat_2.subRegulat_2_18.items;
                   for (let c in subRegulat_2_18) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_18[c].paragraph} ${subRegulat_2_18[c].fieldName}</p>`
                   }

                   this.body+=`</div>
                   <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">
                   <div class="commetRegulat-item-body-title commetRegulat-item-body__title">2.19. Требования к организации предоставления Муниципальной услуги МФЦ</div>`

                   const subRegulat_2_19 = this.documentData.regulat_2.subRegulat_2_19.items;
                   for (let c in subRegulat_2_19) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_2_19[c].paragraph} ${subRegulat_2_19[c].fieldName}</p>`
                   }
                   this.body += `</div>
                   </div>
                  </div>
                  `;

  }
  setBody_3(){
   this.body += `<div class="accardion-item commetRegulat-item-body">
                  <div class="section-header section-header--mb2">
                   <h2 class="section-header__title section-header__title_fz18">3. Состав, последовательность и сроки выполнения административных процедур (действий), требования к порядку их выполнения</h2>
                  </div>
                 <div class="accardion-content commetRegulat-item-content">
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">`
                  const subRegulat_3_1 = this.documentData.regulat_3.subRegulat_3_1.items;
                   for (let c in subRegulat_3_1) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_3_1[c].paragraph} ${subRegulat_3_1[c].fieldName}</p>`
                   }

                   this.body += `</div>
                   </div>
                  </div>
                  `;
  }
  setBody_4(){
   this.body += `<div class="accardion-item commetRegulat-item-body">
                  <div class="section-header section-header--mb2">
                   <h2 class="section-header__title section-header__title_fz18">4. Порядок И ФОРМЫ КОНТРОЛЯ ЗА ИСПОЛНЕНИЕМ АДМИНИСТРАТИВНОГО РЕГЛАМЕНТА</h2>
                  </div>
                 <div class="accardion-content commetRegulat-item-content">
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">`
                  const subRegulat_4_1 = this.documentData.regulat_4.subRegulat_4_1.items;
                   for (let c in subRegulat_4_1) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_4_1[c].paragraph} ${subRegulat_4_1[c].fieldName}</p>`
                   }

                   this.body += `</div>
                   </div>
                  </div>
                  `;
  }

  setBody_5(){
   this.body += `<div class="accardion-item commetRegulat-item-body">
                  <div class="section-header section-header--mb2">
                   <h2 class="section-header__title section-header__title_fz18">5. Досудебный (ВНЕСУДЕБНЫЙ) ПОРЯДОК ОБЖАЛОВАНИЯ РЕШЕНИЙ И ДЕЙСТВИЙ (БЕЗДЕЙСТВИЯ) ОРГАНА, ПРЕДОСТАВЛЯЮЩЕГО МУНИЦИПАЛЬНУЮ УСЛУГУ, А ТАКЖЕ ЕГО ДОЛЖНОСТНЫХ ЛИЦ</h2>
                  </div>
                 <div class="accardion-content commetRegulat-item-content">
                  <div class="commetRegulat-item-body__content" style="padding: 1rem 2.8rem 2rem 3.2rem;">`
                  const subRegulat_5_1 = this.documentData.regulat_5.subRegulat_5_1.items;
                   for (let c in subRegulat_5_1) {
                    this.body += `<p class="commetRegulat-item-body__desc commetRegulat-desc">${subRegulat_5_1[c].paragraph} ${subRegulat_5_1[c].fieldName}</p>`
                   }

                   this.body += `</div>
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
    this.setBody_2();
    this.setBody_3();
    this.setBody_4();
    this.setBody_5();
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
