import {valueSubRegulat_1, valueSubRegulat_2, valueSubRegulat_3, valueSubRegulat_4, valueSubRegulat_5} from './dataValue.js';


export function saveDate(target) {
 let items;
 const triger = target;
 const item = (triger.parentNode).parentNode;
 const constRegulat = document.querySelector('.constRegulat');
 const constRegulatEdit = document.querySelector('.constRegulat-edit');
 let docId;
 if(constRegulatEdit){
  docId = document.getElementById('title').dataset.id;
 } else {
  if(constRegulat.dataset.id){
   docId = constRegulat.dataset.id;
  }
 }
 
 if(item.querySelector('#headerText')){
  saveDocumentHeader()
 }
 if(item.querySelector('#nameOrgan1')){
  items = valueSubRegulat_1();
  saveDocumentBody_1();
 }
 if(item.querySelector('#field_2_2_1')){
  items = valueSubRegulat_2()
  saveDocumentBody_2()
 }
 if(item.querySelector('#field_3_1')){
  items = valueSubRegulat_3()
  saveDocumentBody_3()
 }
 if(item.querySelector('#field_4_1')){
  items = valueSubRegulat_4()
  saveDocumentBody_4()
 }
 if(item.querySelector('#field_5_1')){
  items = valueSubRegulat_5()
  saveDocumentBody_5()
 }
 if(item.querySelector('#btnSaveDocument')){
  saveDocumentBody();
 }
 if(item.querySelector('#emailArray')){
  sendDocumentBody();
 }

 function saveDocumentHeader(){
  const headerText = item.querySelector('#headerText');
  const nameOrg = item.querySelector('#nameOrg');
  const nameService = item.querySelector('#nameService');
  const DOC = {
   authorId: document.querySelector('#authorId').dataset.id,
    title: document.querySelector('#title').value,
   headDOC: {
    headerTitle: headerText.value,
   deliveryDoc: nameOrg.value,
   servicy: nameService.value
  }
  }
  if(constRegulatEdit){
   fetch(`../../document/editDocument/${docId}/setDocumentHeader?action=edit`, {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(DOC)
    }).then(res => res.json()).then(regul => {
    })
  } else {
   fetch('../document/createDocument/setDocumentHeader?action=create', {
    method: 'post',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(DOC)
    }).then(res => res.json()).then(regul => {
     if(regul.result._id){
      constRegulat.setAttribute('data-id', regul.result._id)
      document.getElementById('setDocumentBody_1').removeAttribute('hidden');
      document.getElementById('sectionTitleDocument').style.display = 'block';
      constRegulat.style.marginBottom = '0rem';
     }
    })
  }
 
 }
 
 function saveDocumentBody_1(){
   const subRegulat = {
    id: docId,
    row_1_1: items.subRegulat_1_1,
    row_1_2: items.subRegulat_1_2,
    row_1_3: items.subRegulat_1_3
   }

  if(constRegulatEdit){
   fetch(`../../document/editDocument/${docId}/setDocumentBody_1?action=edit`, {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     
    })
  } else {
   fetch('../document/createDocument/setDocumentBody_1?action=create', {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     if(regul.result.step === 1){
      document.getElementById('setDocumentBody_2').removeAttribute('hidden');
      
     }
     })
  }
 }

 function saveDocumentBody_2(){
  const subRegulat = {
   id: docId,
   row_2_1: items.subRegulat_2_1,
   row_2_2: {
    item_2_2_1:items.subRegulat_2_2.row_2_2_1,
    item_2_2_2:items.subRegulat_2_2.row_2_2_2
   },
   row_2_3: items.subRegulat_2_3,
   row_2_4: items.subRegulat_2_4,
   row_2_5: items.subRegulat_2_5,
   row_2_6: items.subRegulat_2_6,
   row_2_7: items.subRegulat_2_7,
   row_2_8: items.subRegulat_2_8,
   row_2_9: items.subRegulat_2_9,
   row_2_10: items.subRegulat_2_10,
   row_2_11: items.subRegulat_2_11,
   row_2_12: items.subRegulat_2_12,
   row_2_13: items.subRegulat_2_13,
   row_2_14: items.subRegulat_2_14,
   row_2_15: items.subRegulat_2_15,
   row_2_16: items.subRegulat_2_16,
   row_2_17: items.subRegulat_2_17,
   row_2_18: items.subRegulat_2_18,
   row_2_19: items.subRegulat_2_19,

  }
  if(constRegulatEdit){
   fetch(`../../document/editDocument/${docId}/setDocumentBody_2?action=edit`, {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     })
  } else {
   fetch('../document/createDocument/setDocumentBody_2?action=create', {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     if(regul.result.step === 2){
      document.getElementById('setDocumentBody_3').removeAttribute('hidden');
     }
     })
  }
 
 }

 function saveDocumentBody_3(){
  const subRegulat = {
   id: docId,
   row_3_1: items.subRegulat_3_1
  }
  if(constRegulatEdit){
   fetch(`../../document/editDocument/${docId}/setDocumentBody_3?action=edit`, {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     })
  } else {
   fetch('../document/createDocument/setDocumentBody_3?action=create', {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     if(regul.result.step === 3){
      document.getElementById('setDocumentBody_4').removeAttribute('hidden');
     }
     })
  }

 }

 function saveDocumentBody_4(){
  const subRegulat = {
   id: docId,
   row_4_1: items.subRegulat_4_1
  }
  if(constRegulatEdit){
   fetch(`../../document/editDocument/${docId}/setDocumentBody_4?action=edit`, {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     })
  } else {
   fetch('../document/createDocument/setDocumentBody_4?action=create', {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     if(regul.result.step === 4){
      document.getElementById('setDocumentBody_5').removeAttribute('hidden');
     }
     })
  }
 
 }

 function saveDocumentBody_5(){
  const subRegulat = {
   id: docId,
   row_5_1: items.subRegulat_5_1
  }
  if(constRegulatEdit){
   fetch(`../../document/editDocument/${docId}/setDocumentBody_5?action=edit`, {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
     })
  } else {
   fetch('../document/createDocument/setDocumentBody_5?action=create', {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(regul => {
    if(regul.result.step === 5){
     document.getElementById('saveDocument').removeAttribute('hidden');
     document.getElementById('sendAprev').removeAttribute('hidden');
    }
    })
  }
 
 }

 function saveDocumentBody(){
  const subRegulat = {
   id: docId
  }
  if(constRegulatEdit){
   fetch(`../../document/editDocument/${docId}/saveDocument?action=edit`, {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(res => {
     document.getElementById('docId').value = res.result.authorId
     
    })
  } else {
   fetch('../document/createDocument/saveDocument?action=create', {
    method: 'put',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(res => {
     document.getElementById('docId').value = res.result.authorId
     
    })
  }

 
 }

 function sendDocumentBody(){
  const subRegulat = {
   docId: docId,
   emailArray: [{
    email:item.querySelector('#emailArray').value
   }]
  }
  if(constRegulatEdit){
   fetch(`../../document/editDocument/${docId}/sendDocument?action=edit`, {
    method: 'post',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(res => {
     if(res.result){
      window.location.href = `http://localhost:3000/user/${document.getElementById('docId').value}/document`
     }
    })
  } else {
   fetch('../document/createDocument/sendDocument', {
    method: 'post',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(subRegulat)
    }).then(res => res.json()).then(res => {
     if(res.result){
      window.location.href = `http://localhost:3000/user/${document.getElementById('docId').value}/document`
     }
    })
  }

 }
}