console.log("**** TRAVERSING DOM ****")

//!=========================================================
//!               TRAVERSİNG DOM
//!=========================================================
//? Bir HTML elementi üzerinden başka elementleri secmeye
//?DOM traversing denilir. Özellikle dinamik olarak değişen 
//? (silme veya yeni ekleme gibi) HTML elemanlarinin seecerken 
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yönde (Parent)
//? - Asagi yönde (Child)
//? - Yatay yönde (Sibling)

//! 1- Yukari Yonde Traverse
//!-------------------------------------------------------------

const addItem = document.querySelector(".add-item")
console.log(addItem)

console.log(addItem.parentElement) //* Main
console.log(addItem.parentElement.parentElement) //* Body

//* closest(): belirtilen elementin parent'larin ilk uygun parent'i secer

const list = document.querySelector(".list")
console.log(list.textContent)

console.log(list.closest("section"))

console.log(list.closest("body").querySelector("header h1").innerText)

//! 2 - Asagi Yönde Traverse
//!-------------------------------------------------------------
//? Children, firstElementChild(), lastElementChild

console.log(addItem.children) //HTMLCollection(3) [h2, input#input, input#btn, input: input#input, btn: input#btn]

console.log(addItem.children[2])

console.log(addItem.firstElementChild) //*h2
console.log(addItem.lastElementChild) //* ADD Buton

console.log(addItem.firstChild) //* merhaba section

//* firstChild bir yazi elementinin icerisindeki yazi dugumunu verir.
console.log(document.querySelector("h1").firstChild) //*DOM SELECTORS

//! 3- Yatay Yonde Traverse
//!-------------------------------------------------------------
//* nextElementSbigling ,previouselementSibling

const ul = document.querySelector("ul")

const lists = ul.children
console.log(lists)

const js = lists[2]
console.log(js.innerHTML) //*JavaScript

const css = js.previousElementSibling
console.log(css.innerHTML) //*CSS

const django = js.nextElementSibling.nextElementSibling
console.log(django.innerHTML) //Django