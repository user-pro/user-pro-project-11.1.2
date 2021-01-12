//             BURGER
"use strict";

const dLink = document.querySelector('.js-district__flats_link'),
   corpsTableItems = document.querySelectorAll('.corps-table__item'),
   corpsSelect = document.querySelector('.corps-select'),
   corpsSelectItems = document.querySelectorAll('.corps-select__item'),
   corpsTables = document.querySelectorAll('.corps__table'),
   corpsSelected = document.querySelector('.corps-selected'),
   activeCorpsSelectItem = document.querySelector('.corps-select__item._active-corps-select');

if(corpsSelect){
      const activeCorpsSelectedName = activeCorpsSelectItem.querySelector('.corps-select__name'),
            activeCorpsSelectedFlatsQuantity = activeCorpsSelectItem.querySelector('.corps-select__flats-quantity');
      
      let corpsSelectName = corpsSelected.querySelector('.corps-selected__name'),
         corpsSelectFlatsQuantity = corpsSelected.querySelector('.corps-selected__flats-quantity');
      corpsSelectName.innerHTML = activeCorpsSelectedName.textContent;
      corpsSelectFlatsQuantity.innerHTML = activeCorpsSelectedFlatsQuantity.textContent;





   let corpsSelectItemWithActive,
      corpsTableActive,
      corpsTableChildes;
   let corpsTableItemsActive = [];


   function generatePopups(){
      let popupItem_ = document.createElement('div');
      popupItem_.classList.add('popup');
      popupItem_.setAttribute("id", dLink);
      popupItem_.innerHTML = `
         <div class="popup__body">
            <div class="popup__content">
               <a href="" class="popup__close"><svg aria-hidden="true" focusable="false" data-prefix="far" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" ><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" class=""></path></svg></a>
               <div class="popup__inner">
                  <div class="popup__image"><img class="popup__img" src="img/corps-table-item-img-${dLink}"></div>
                  <div class="popup__text">
                     <div class="popup__number">№${dLink}</div>
                     <div class="popup__price">${dLink}</div>
                     <div class="popup__calc-price">${dLink}руб. за м²</div>
                     <div class="popup__square">${dLink} м² <span>Черновая</span></div>
                  </div>
               </div>
               <button class="popup__btn"><a>Оставить заявку</a></button>
            </div>
         </div>
      `;
   }
   let prices = {
      '51.93': '7 500 000',
   };


   if (corpsSelectItems.length > 0) {
      for (let i = 0; i < corpsSelectItems.length; i++) {
         let corpsSelectItem = corpsSelectItems[i];
         corpsSelectItem.addEventListener('click', () => {
            for (let i = 0; i < corpsSelectItems.length; i++) {
               let corpsSelectItem_ = corpsSelectItems[i];
               if (corpsSelectItem_.classList.contains('_active-corps-select')) {
                  corpsSelectItem_.classList.remove('_active-corps-select');
               }
            }
            corpsSelectItem.classList.add('_active-corps-select');
            if (corpsTables.length > 0) {
               for (let i = 0; i < corpsSelectItems.length; i++) {
                  let corpsSelectItem = corpsSelectItems[i];
                  if (corpsSelectItem.classList.contains('_active-corps-select')) {
                     corpsSelectItemWithActive = corpsSelectItem;
                  }
               }
               for (let i = 0; i < corpsTables.length; i++) {
                  let corpsTable = corpsTables[i];
                  let corpsSelectItemId = corpsSelectItemWithActive.getAttribute("id");
                  if(corpsTable.getAttribute("id").includes(`${corpsSelectItemId}`)){
                     for (let i = 0; i < corpsTables.length; i++) {
                        let corpsTable_ = corpsTables[i];
                        if (corpsTable_.classList.contains('_active-corps-table')){
                           corpsTable_.classList.remove('_active-corps-table');
                        }
                     }
                     corpsTable.classList.add("_active-corps-table");
                  }
               }
            }
            let corpsSelectedName = corpsSelectItem.querySelector('.corps-select__name'),
               corpsSelectedFlatsQuantity = corpsSelectItem.querySelector('.corps-select__flats-quantity');
            corpsSelectName.innerHTML = corpsSelectedName.textContent;
            corpsSelectFlatsQuantity.innerHTML = corpsSelectedFlatsQuantity.textContent;

            // if(corpsTableItems.length > 0){
            //    for (let i = 0; i < corpsTables.length; i++) {
            //       let corpsTable = corpsTables[i];
            //       // console.log(corpsTable);
            //       if(corpsTable.classList.contains('_active-corps-table')){
            //          corpsTableActive = corpsTable;
            //          console.log(corpsTableActive);
            //          corpsTableChildes = corpsTableActive.querySelectorAll('.corps-table__item');
            //       }
            //    }
            //    corpsTableItemsActive.length = 0;
            //    for (let i = 0; i < corpsTableChildes.length; i++) {
            //       let corpsTableActiveChilde = corpsTableChildes[i];
            //       if(!(corpsTableActiveChilde.classList.contains('number-item') || corpsTableActiveChilde.classList.contains('locked-item') || corpsTableActiveChilde.classList.contains('booked-item') || corpsTableActiveChilde.classList.contains('empty-item'))){
            //          corpsTableItemsActive.push(corpsTableActiveChilde);
            //          console.log(corpsTableItemsActive);

            //       }
            //    }
            //    let corpsTableItemActiveLink_price,
            //        corpsTableItemActiveLink_text,
            //        corpsTableItemActiveLink_square;

            //    for (let i = 0; i < corpsTableItemsActive.length; i++) {
            //       let corpsTableItemActive = corpsTableItemsActive[i];
            //       console.log(corpsTableItemActive);
            //       let corpsTableItemActiveLink = corpsTableItemActive.querySelector('a');

            //       corpsTableItemActiveLink.setAttribute('href', `#popup_${i + 1}`);

            //       console.log(corpsTableItemActiveLink.getAttribute('href'));
            //       corpsTableItemActiveLink_text = corpsTableItemActiveLink.textContent;

            //       for(let price in prices){
            //          if(corpsTableItemActiveLink_text == price){
            //             // console.log(prices[price]);
            //             corpsTableItemActiveLink_price = prices[price];
            //             // return;
            //          }                  
            //       }
            //       // corpsTableItemActiveLink_square = Number(corpsTableItemActiveLink_price) / Number(corpsTableItemActiveLink_text);

                  
                  
                  
            //       console.log(corpsTableItemActiveLink.textContent);
            //       console.log(corpsTableItemActiveLink_price);
            //    }
            // }
         });
      }
   }







   if (corpsSelect) {
      corpsSelect.addEventListener('click', () => {
         corpsSelect.classList.toggle('_active');
      });
   }
}
if (document.documentElement.clientWidth < 380) {
   if (dLink) {
      dLink.innerHTML = "Перейти на сайт ЖК >";
   }
}





const popupLinks = document.querySelectorAll('.popup-link'),
      body = document.querySelector('body'),
      lockPadding = document.querySelectorAll('.lock-padding');



let unlock = true;

const timeout = 600;



if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('.popup__close');   
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));                          
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');   
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');			             
      curentPopup.addEventListener("click", function (e){
         if (!e.target.closest('.popup__content')) {		    
            popupClose(e.target.closest('.popup'));		    
         }
      });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');			    
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const LockPaddingValue = window.innerWidth - document.querySelector('html').offsetWidth + 'px';
   if (lockPadding.lenght > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];   
         el.style.paddingRight = LockPaddingValue;
      }
   }
   body.style.paddingRight = LockPaddingValue;
   body.classList.add('_lock');					   

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      for ( let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRigth ='0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');				
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout)
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');   
      popupClose(popupActive);
   }
});

(function () {
   if (!Element.prototype.closest) {
      Element.prortotype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesMatchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.sMatchesSelector;
   }
})();

//
for(let i = 0; i < popupLinks.length; i++){
   let popupLink = popupLinks[i];
   if(popupLink.getAttribute("href") == ""){
      popupLink.style.cursor = "default";
   }

} ;
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
   
testWebP(function (support) {
   
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }else{
      document.querySelector('body').classList.add('no-webp');
   }
});;
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;


