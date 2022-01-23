const aboutTabsTriggersBlock = document.querySelectorAll('.about-tabs__triggers-block');
const aboutTabsContant = document.querySelector('.about-tabs__contant');
const aboutTabsContantItem = document.querySelectorAll('.about-tabs__contant-item');
const aboutAccordionTriggersBlockItem = document.querySelectorAll('.about-accordion__triggers-block-item');
const aboutAccordionContantBlock = document.querySelectorAll('.about-accordion__contant-block');
const aboutTabsTriggersItem = document.querySelectorAll('.about-tabs__triggers-block-item');
const aboutTabsTriggersBlockCount = aboutTabsTriggersBlock.length;

 aboutTabsTriggersItem.forEach((item, index) =>{
    
      item.addEventListener('click', function(event){
      event.preventDefault();
      const id = event.target.getAttribute('href').replace('#', '');
        aboutTabsTriggersItem.forEach((child) => {
          child.classList.remove('about-tabs__triggers-block-item--active');
          child.removeAttribute('style');
        });
        aboutTabsContantItem.forEach((child) => {
          child.classList.remove('about-tabs__contant-item--active');
        });

      item.classList.add('about-tabs__triggers-block-item--active');
      item.style.background = `#F4F4F4`;
      document.getElementById(id).classList.add('about-tabs__contant-item--active');
      
    });
  });
  document.querySelector('.about-tabs__triggers-block-item').click();