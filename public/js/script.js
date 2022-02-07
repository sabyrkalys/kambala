import {saveDate} from './ajaxAddRegulat.js';
import {render} from './renderPunkt.js';

const accardion = document.querySelectorAll('.accardion');
const list = document.querySelectorAll('.constRegulat-form-headerDoc__ul');
const linkName = document.querySelector('.create-personal-data__link');

function clickAccardion(e){
 e.preventDefault();
 const target = e.target;
const isAссardion = target.classList.contains('accardion-triger');
const isButtontSave = target.classList.contains('constRegulat-form-blockBtn__btn_save');
const isButtontSend = target.classList.contains('send-aprev__btn_send');
 if(isAссardion){
  accordion(target);
 } else if(isButtontSave || isButtontSend){
  saveDate(target);
 }
}

function accordion(target){
 const triger = target;
 const item = (triger.parentNode).parentNode;
 const content = item.querySelector('.accardion-content');
 const accordeon = item.parentNode;
	const trigerList = accordeon.querySelectorAll('.accardion-triger');
 const isActive = triger.classList.contains('active');

 if(isActive) {
  removeActiveClass(triger, content);
  showContent(content);
	} else {
  showContent(content);
		addActiveClass(triger, content);
  hideContent(content);
	}
}

function showContent(content) {
 content.style.maxHeight = `${getContentHeight(content)}px`;
}

function hideContent(cont) {
 cont.style.maxHeight = '0px';
}

function addActiveClass(triger, content) {
triger.classList.add('active');
content.classList.add('active-content');
triger.textContent === 'Свернуть раздел' ? triger.textContent ='Развернуть раздел' : triger.textContent = 'Развернуть';
}

function removeActiveClass(triger, content) {
 triger.classList.remove('active');
 content.classList.remove('active-content');
 triger.textContent === 'Развернуть раздел' ? triger.textContent ='Свернуть раздел' : triger.textContent = 'Свернуть';
}

function getContentHeight(content) {
return content.scrollHeight;
}

accardion.forEach(item => item.addEventListener('click', clickAccardion));



function sabyrParagraph(targetList, targetListParent){
const parentList = targetList.parentNode;
const l = targetList.querySelector('.constRegulat-form-headerDoc-string__paragraph')
const r = parentList.contains(l);
if(r){
 const parentItem = parentList.querySelectorAll('.constRegulat-form-headerDoc-string__paragraph');
 parentItem.forEach((p, i) => {
 const fierstElem = [...parentItem];
 const parentItemNpar = (fierstElem[0].textContent).match(/\d+/g).map(Number);
 fierstElem.textContent = '';
 if(parentItemNpar.length == 2){
  parentItemNpar.splice(1, 1, i+=1);
 } else{
  parentItemNpar.splice(2, 1, i+=1);
 }
 p.textContent = parentItemNpar.join('.');
 });
} else {
 sabyrParagraphAdd(targetListParent);
}

}

function sabyrParagraphAdd(targetListParent){
 const j = targetListParent.parentNode;
 const h = j.querySelector('.constRegulat-form-headerDoc-string__paragraph');
 const parentItemNpar = (h.textContent).match(/\d+/g).map(Number);
 parentItemNpar.push(1);
 const parentItem = targetListParent.querySelector('.constRegulat-form-headerDoc-string__paragraph');
 parentItem.textContent = parentItemNpar.join('.');
  targetListParent.children[0].remove();
}

function addPunkt(e){
 const target = e.target;
const isAddTarget = target.classList.contains('constRegulat-form-blockBtn__btn_addPoint');
const targetList = (target.parentNode).parentNode;
const targetListParent = ((target.parentNode).parentNode).parentNode;
if(isAddTarget){
 render(target, targetList);
 sabyrParagraph(targetList, targetListParent);
 
} else {
 false;
}
}

function removePunkt(e){
 const target = e.target;
const targetList = ((target.parentNode).parentNode).parentNode;
const children =  targetList.children;
const isRemoveTarget = target.classList.contains('constRegulat-form-blockBtn__btn_removePoint');
if(isRemoveTarget){
 if(isRemoveTarget && children.length > 1){
  (target.parentNode).parentNode.remove();
 } 
 else if(target.classList.contains('constRegulat-form-blockBtn__btn_addPoint')){
  false;
 } 
 else{
  alert('Крайний элемент удалить не возможно');
 }
}
}

function reName(e){
 e.preventDefault();
 const reNameInput = this.previousElementSibling;
 reNameInput.value = '';
 reNameInput.style.cssText = 'background: #fff; border:1px solid #000; width:400px';
 reNameInput.removeAttribute("disabled");
 this.style.display = 'none';

}

if(
 list.length
){
 list.forEach(item => item.addEventListener('click', removePunkt));
 list.forEach(item => item.addEventListener('click', addPunkt));
}

if(
 document.querySelector('.create-personal-data__link')
){
 linkName.addEventListener('click', reName);
}

/*
* Выделение и комментирование текста
*/
const commentList = document.querySelector('.commetRegulat-correct__ul');
const content = document.querySelectorAll('.commetRegulat-item-body__content');
const correctTitle = document.querySelector('.commetRegulat-correct-item__title');

const btnCommentAdd = document.querySelector('.btn-commentAdd');
const docId = document.querySelector('.create-personal-data__input_nameInputReg').dataset.id;
let comment;
let selection, subdata = []; 
let k = 0;
const html = document.documentElement;
const body = document.body;
let commentE, titleComment;

let initSome = function() {
 let clickX = 0, clickY = 0;
 document.getElementById('add-commet').disabled = true;
 btnCommentAdd.style.display = 'none';

  function fixPageXYdown(e) {
   if(e.target.classList.contains('addSpan')){
   e.target.classList.remove('addSpan');
   btnCommentAdd.style.left = `-10000px`;
   }
  }
  function fixPageXYup(e) {
    let x = e.pageX;
    let y = e.pageY;
    sabyrSelect(x, y);
    if(e.target.classList.contains('commetRegulat-desc')){
    e.target.classList.add('addSpan');
    }
  }
  
  function sabyrSelect(x, y){
   clickX = x;
   clickY = y;
   selection = document.getSelection();
   let isSelection = selection.toString();
   if(isSelection.length > 2){
    btnCommentAdd.style.display = 'block';
    btnCommentAdd.style.top = `calc(${clickY}px - 36px)`;
    btnCommentAdd.style.left = `calc(${clickX}px - 130px)`;
    const link = btnCommentAdd.childNodes[0];
     link.addEventListener('click', ckickComment);
   }
  }
  
  function ckickComment(e){
   e.preventDefault();
   const parentSelection = selection.anchorNode.parentElement;
   parentSelection.classList.remove('addSpan');
   let rng = selection.getRangeAt(0);
   if(selection.toString().length > 2){
    let span = document.createElement('span');
    span.classList.add('correctText');
    span.style.backgroundColor = 'yellow';
    rng.surroundContents(span);
   }
   btnCommentAdd.style.left = `-10000px`;
   
   renderComment();
   window.getSelection().removeAllRanges();
   
  }
  
  
  function renderComment(){
   const childrenComment = document.querySelectorAll('.commetRegulat-correct-item');
   let num = childrenComment.length;
   const li = document.createElement('li');
   li.classList.add('commetRegulat-correct__item');
   li.classList.add('commetRegulat-correct-item');
   li.innerHTML = `<span class="commetRegulat-correct-item__title">${num +1}. ...”${selection}”</span><textarea name="" id="" cols="15" rows="5" class="commetRegulat-correct-item__desc"></textarea>`;
   commentList.append(li);
   let commentFirst = document.querySelectorAll('.commetRegulat-correct-item__desc');
   comment = commentFirst;
   comment.forEach(item => item.addEventListener('focus', commentControl));
  }
  
  
  function commentControl(){
   commentE = this;
   const parentComment = this.parentNode.children[0];
   titleComment = parentComment.textContent.split('”');
   document.getElementById('add-commet').disabled = false;
  document.getElementById('add-commet').addEventListener('click', addComment);
  }
  
  function addComment(){
   const newComment = {
    selectedString: titleComment[1],
    comment: commentE.value
   }
   if(commentE.value.trim() === ''){
     commentE.style.border = '1px solid red';
     alert('Добавьте комментарий');
   } else {
    commentE.style.border = '0.3px solid #000';
    commentE.parentNode.style.paddingBottom = '1.5rem';
    commentE.parentNode.style.marginBottom = '1.5rem';
    commentE.parentNode.style.borderBottom = '1px solid #ccc';
    commentE.disabled = true;
    document.getElementById('add-commet').disabled = true;
    fetch(`../comments/${docId}/setComment/${docId}`, {
     method: 'put',
     headers: {
      'Content-Type': 'application/json'
     },
     body: JSON.stringify(newComment)
     }).then(res => res.json()).then(res => {
     })
   }
   }
  
  content.forEach(item => item.addEventListener('mouseup', fixPageXYup));
  content.forEach(item => item.addEventListener('mousedown', fixPageXYdown));
  document.addEventListener('selectionchange', sabyrSelect);
}

/*
* запуск функций
*/
const btnEditElem = document.getElementById('btn_edit');
if(btnEditElem){
} else if(document.querySelector('.constRegulat')){
} else{
 initSome();
}


