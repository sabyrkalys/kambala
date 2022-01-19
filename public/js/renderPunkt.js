
export function render (target, targetList){
 const howtriger = target;
 const list = targetList.parentNode;
 const li = document.createElement('li');
li.classList.add('constRegulat-form-headerDoc__item');
if(howtriger.closest('.oneP')){
 li.classList.add('oneP');
 li.classList.add('subRegulat_1_1'); 
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span> Административный регламент предоставления администрацией
    </span><input type="text" placeholder="(наименование  органа)" name="nameOrgan1" id="nameOrgan1" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width40 name-org">
   </div>
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400">услуги</span><input type="text" placeholder="(наименование услуги)" name="nameService1" id="nameService1" class="constRegulat-form-headerDoc-string__input name-service constRegulat-form-headerDoc-string__input_width93">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"> 
     (далее соответственно - услуга, Регламент) определяет стандарт, сроки и последовательность выполнения административных процедур (действий) по предоставлению администрацией</span><input type="text" placeholder="(наименование органа)" name="nameOrgan2" id="nameOrgan2" class="constRegulat-form-headerDoc-string__input constRegulat-form-headerDoc-string__input_width42 name-service">
     <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400">услуги</span><input type="text" placeholder="(наименование услуги)" name="nameService2" id="nameService2" class="constRegulat-form-headerDoc-string__input name-service constRegulat-form-headerDoc-string__input_width93">
   </div>
 </div> 
 </div>
 <div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.one-twoP')){
 li.classList.add('one-twoP');
 li.classList.add('subRegulat_1_2'); 
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">2.2.1.</span> </span><input type="text" name="field_1_2" id="field_1_2" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.one-threeP')){
 li.classList.add('one-threeP');
 li.classList.add('subRegulat_1_3'); 
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">2.2.1.</span> </span><input type="text" name="field_1_3" id="field_1_3" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.one-three__twoP')){
 li.classList.add('one-three__twoP');
 li.classList.add('subRegulat_1_3'); 
 li.innerHTML = `   <div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">2.2.1.</span> </span><input type="text" name="field_1_3" id="field_1_3" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} 
else if(howtriger.closest('.subRegulat_2_1')){
 //li.classList.add('2_1P');
 li.classList.add('subRegulat_2_1');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_1" id="field_2_1" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} 
else if(howtriger.closest('.two-oneP')){
 li.classList.add('two-oneP');
 li.classList.add('subRegulat_2_2_1');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">2.2.1.</span> Предоставление муниципальной услуги осуществляется администрацией</span><input type="text" name="field_2_2_1" id="field_2_2_1" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.two-twoP')){
 li.classList.add('two-twoP');
 li.classList.add('subRegulat_2_2_2');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">2.2.2.</span> При предоставлении муниципальной услуги Уполномоченным органом осуществляет взаимодействие с:</span><textarea type="text" name="field_2_2_2" id="field_2_2_2"
    placeholder="наименование органов исполнительной власти, иных органов местного самоуправления, а также организаций, обращение в которые необходимо для предоставления  услуги" class="constRegulat-form-headerDoc-string__input constRegulat-form-headerDoc-string__input_width95 name-org"></textarea>
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_3')){
 li.classList.add('subRegulat_2_3');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_3" id="field_2_3" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_4')){
 li.classList.add('subRegulat_2_4');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_4" id="field_2_4" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_5')){
 li.classList.add('subRegulat_2_5');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_5" id="field_2_5" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_6')){
 li.classList.add('subRegulat_2_6');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_6" id="field_2_6" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_7')){
 li.classList.add('subRegulat_2_7');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_7" id="field_2_7" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_8')){
 li.classList.add('subRegulat_2_8');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_8" id="field_2_8" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_9')){
 li.classList.add('subRegulat_2_9');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_9" id="field_2_9" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_10')){
 li.classList.add('subRegulat_2_10');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_10" id="field_2_10" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_11')){
 li.classList.add('subRegulat_2_11');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_11" id="field_2_11" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_12')){
 li.classList.add('subRegulat_2_12');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_12" id="field_2_12" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_13')){
 li.classList.add('subRegulat_2_13');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_13" id="field_2_13" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_14')){
 li.classList.add('subRegulat_2_14');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_14" id="field_2_14" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_15')){
 li.classList.add('subRegulat_2_15');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_15" id="field_2_15" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_16')){
 li.classList.add('subRegulat_2_16');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_16" id="field_2_16" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_17')){
 li.classList.add('subRegulat_2_17');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_17" id="field_2_17" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_18')){
 li.classList.add('subRegulat_2_18');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_18" id="field_2_18" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.subRegulat_2_19')){
 li.classList.add('subRegulat_2_19');
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph"></span></span><input type="text" name="field_2_19" id="field_2_19" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
}
else if(howtriger.closest('.threeP')){
 li.classList.add('threeP');
 li.classList.add('subRegulat_3_1'); 
 li.innerHTML = '';
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">3.</span></span><input type="text" name="field_3_1" id="field_3_1" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.fourP')){
 li.classList.add('fourP');
 li.classList.add('subRegulat_4_1'); 
 li.innerHTML = '';
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">4.</span></span><input type="text" name="field_4_1" id="field_4_1" class="constRegulat-form-headerDoc-string__input
    constRegulat-form-headerDoc-string__input_width95 name-org">
   </div>
 </div> 
</div>
<div class="constRegulat-form__blockBtn constRegulat-form-blockBtn constRegulat-form__blockBtn_mt2"><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_addPoint" type="submit">Добавить подпункт</button><button class="btn constRegulat-form-blockBtn__btn constRegulat-form-blockBtn__btn_removePoint">Удалить пункт</button></div>`;
} else if(howtriger.closest('.fiveP')){
 li.classList.add('fiveP');
 li.classList.add('subRegulat_5_1'); 
 li.innerHTML = '';
 li.innerHTML = `<div class="constRegulat-form-headerDoc__area constRegulat-form-headerDoc__area_antherHeight">
 <div class="constRegulat-form-headerDoc__container constRegulat-form-headerDoc__container_adminReg">
   <div class="constRegulat-form-headerDoc-string constRegulat-form-headerDoc-string--db">
    <span class="constRegulat-form-headerDoc-string__title constRegulat-form-headerDoc-string__title_font400"><span class="constRegulat-form-headerDoc-string__paragraph">5.</span></span><input type="text" name="field_5_1" id="field_5_1" class="constRegulat-form-headerDoc-string__input
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