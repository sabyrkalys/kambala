const 
accardion = document.querySelectorAll('.accardion');
const list = document.querySelectorAll('.constRegulat-form-headerDoc__ul');
const linkName = document.querySelector('.create-personal-data__link');

function clickAccardion(e){
 e.preventDefault();
 const target = e.target;
const isAссardion = target.classList.contains('accardion-triger');
const isButtontSave = target.classList.contains('constRegulat-form-blockBtn__btn_save');
 if(isAссardion){
  accordion(target);
 } else if(isButtontSave){
  saveDate(target);
 }
}
function saveDate(target) {
 const triger = target;
 const item = (triger.parentNode).parentNode;
 const constRegulat = document.querySelector('.constRegulat');
 if(item.querySelector('#headerText')){
  const headerText = item.querySelector('#headerText');
  const nameOrg = item.querySelector('#nameOrg');
  const nameService = item.querySelector('#nameService');
  const DOC = {
   headDOC: {
    headerTitle: headerText.value,
   deliveryDoc: nameOrg.value,
   servicy: nameService.value
  },
  }
 fetch('/addRegulat/headerContent', {
 method: 'put',
 headers: {
  'Content-Type': 'application/json'
 },
 body: JSON.stringify(DOC)
 }).then(res => res.json()).then(regul => {
  //regul.regDocument.length
  constRegulat.setAttribute('data-id', regul._id)
 })
}

if(item.querySelector('#nameOrgan1')){
 const nameOrgan1 = item.querySelector('#nameOrgan1').value;
 const nameOrgan2 = item.querySelector('#nameOrgan2').value;
 const nameService1 = item.querySelector('#nameService1').value;
 const nameService2 = item.querySelector('#nameService2').value;
 console.log(constRegulat.dataset.id);
 const subRegulat = {
   id: constRegulat.dataset.id,
   nameOrgan1: nameOrgan1,
   nameService1: nameService1,
   nameOrgan2: nameOrgan2,
   nameService2: nameService2
 }
fetch('/addRegulat/textBody_1', {
method: 'put',
headers: {
 'Content-Type': 'application/json'
},
body: JSON.stringify({subRegulat})
}).then(res => console.log(res.json()))
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
let w = 0;
function render (target, targetList){
 const howtriger = target;
 const list = targetList.parentNode;
 const li = document.createElement('li');
li.classList.add('constRegulat-form-headerDoc__item');
if(howtriger.closest('.oneP')){
 li.classList.add('oneP');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span> Административный регламент предоставления администрацией
    </span><input type="text" placeholder="(наименование  органа)" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width40 name-org">
   </div>
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400">услуги</span><input type="text" placeholder="(наименование услуги)" class="constRegulat-form-headerDoc-string__input name-service constRegulat-form-headerDoc-string__input_width93">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"> 
     (далее соответственно - услуга, Регламент) определяет стандарт, сроки и последовательность выполнения административных процедур (действий) по предоставлению администрацией</span><input type="text" placeholder="(наименование органа)" class="constRegulat-form-headerDoc-string__input constRegulat-form-headerDoc-string__input_width42 name-service">
     <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400">услуги</span><input type="text" placeholder="(наименование услуги)" class="constRegulat-form-headerDoc-string__input name-service constRegulat-form-headerDoc-string__input_width93">
   </div>
 </div> 
 </div>
 <div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.one-twoP')){
 li.classList.add('one-twoP');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span> Заявителями на получение муниципальной услуги являются либо их уполномоченные представители, выступающие от их имени, обратившиеся с заявлением о предоставлении муниципальной услуги (далее - Заявители).
    </span>
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.one-threeP')){
 li.classList.add('one-threeP');
 li.innerHTML = `   <div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span>  Порядок получения информации Заявителями по вопросам предоставления  услуги и услуг, которые являются необходимыми и обязательными для предоставления  услуги, сведений о ходе предоставления указанных услуг, в том числе на официальном сайте, а также в федеральной государственной информационной системе "Единый портал государственных и муниципальных услуг (функций)" (www.gosuslugi.ru) (далее – Единый портал) и на Портале государственных и муниципальных услуг (функций)  (www.pgu..ru) (далее – Региональный портал).</span>
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.one-three__twoP')){
 li.classList.add('one-three__twoP');
 li.innerHTML = `   <div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span>  Порядок, форма, место размещения и способы получения справочной информации, в том числе на стендах в местах предоставления муниципальной услуги и услуг, которые являются необходимыми и обязательными для предоставления муниципальной услуги, и в государственном автономном учреждении "Многофункциональный центр предоставления государственных и муниципальных услуг" (далее – МФЦ).</span>
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.two-oneP')){
 li.classList.add('two-oneP');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">2.2.1.</span> Предоставление муниципальной услуги осуществляется администрацией</span><input type="text" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width33 name-org"><input type="text" class="constRegulat-form-headerDoc-string__input name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.two-twoP')){
 li.classList.add('two-twoP');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">2.2.2.</span> При предоставлении муниципальной услуги Уполномоченным органом осуществляет взаимодействие с:</span><input type="text" placeholder="наименование органов" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width33 name-org"><input type="text" placeholder="исполнительной власти, иных органов местного самоуправления, а также организаций, обращение в которые необходимо для предоставления  услуги)." class="constRegulat-form-headerDoc-string__input name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.threeP')){
 li.classList.add('threeP');
 li.innerHTML = '';
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">3.</span></span><input type="text" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.fourP')){
 li.classList.add('fourP');
 li.innerHTML = '';
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">4.</span></span><input type="text" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.fiveP')){
 li.classList.add('fiveP');
 li.innerHTML = '';
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">5.</span></span><input type="text" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else {
 li.classList.add('firstP');
 li.innerHTML = '';
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;

}
list.append(li); 
}
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
 //parentItemNpar.splice(2, 1, i+=1);
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

let comment;
let selection, subdata = []; 
let num = 0;
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
    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;
  
    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
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
   //correctTitle.innerHTML = selection;
   
   renderComment();
   numberComment();
   window.getSelection().removeAllRanges();
   
  }
  
  function numberComment(){
   const childrenComment = document.querySelectorAll('.commetRegulat-correct-item');
   childrenComment.forEach((item, i) => {
    num = i + 1;
   });
  }
  
  function renderComment(){
   //commentList.innerHTML = '';
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
    correct: titleComment[1],
    commentHas: commentE.value
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
    subdata.push(newComment);
    localStorage.setItem('correctComment', JSON.stringify(subdata));
   }
   }
  
  content.forEach(item => item.addEventListener('mouseup', fixPageXYup));
  content.forEach(item => item.addEventListener('mousedown', fixPageXYdown));
  document.addEventListener('selectionchange', sabyrSelect);
}

let redactView = function() {
 
 function renderComment(){
  commentList.textContent = '';
  subdata.forEach((item,i) =>{
   const li = document.createElement('li');
   li.classList.add('commetRegulat-correct__item');
   li.classList.add('commetRegulat-correct-item');
   li.innerHTML = `<span class="commetRegulat-correct-item__title">${i +1}. ...”${item.correct}”</span><textarea name="" id="" cols="15" rows="5" class="commetRegulat-correct-item__desc">${item.commentHas}</textarea>`;
   commentList.append(li);
  })
  findWord();
 }
 if (localStorage.getItem('correctComment')) {
  subdata = JSON.parse(localStorage.getItem('correctComment'));
  renderComment();
 }

 function findWord(){
  let t = 'Муниципальной услуги';
  subdata.forEach((elem) =>{
   content.forEach((item) => {
    item.innerHTML = item.innerHTML.replace(`${elem.correct}`,"<a name="+elem.correct+" style='background:#BE533F;color:#fff;'>"+elem.correct+"</a>");
   })
  })
  
 }


}
/*
* запуск функций
*/
const btnEditElem = document.getElementById('btn_edit');
if(btnEditElem){
 redactView();
} else if(document.querySelector('.constRegulat')){
 console.log('321');
} else{
 initSome();
}
