console.log("********* SELECTORS **********")

document.title = "DOM DOM"

//!=========================================================
//!               GETELEMENTBYID()
//!=========================================================
// document.getElementById("header").style.border = "1px solid red"
const myHeader = document.getElementById("header")
console.log(myHeader);

myHeader.style.backgroundColor = "red"
myHeader.style.color = "white"


const addButon = document.getElementById("btn")
console.log(addButon);

addButon.style.backgroundColor = "#bebe"
addButon.style.border = "none"
addButon.style.borderRadius = "10px"
addButon.style.padding = "0.6rem"

//* Değer atama
addButon.value = "Save"

//* h1
const h1 = document.getElementById("heading1")
console.log(h1);

//? Değer Atama
h1.textContent = "Dom Introduction"
console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerText);
//!=========================================================
//!               GETELEMENTBYTAGNAME()
//!=========================================================

const myInputs = document.getElementsByTagName("input")
console.log(myInputs); //? [input#input, input#btn, input: input#input, btn: input#btn]


//!HTML Collection (Array-Like) dondurur.
console.log(myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h3")[0]);

//!Array'e çevrilebilir.
const myLists = document.getElementsByTagName("li")

const myListArr = [...myLists]
console.log(myListArr);
myListArr.forEach( (li) => (li.style.color = "red"))

//!Alternatif olarak

const myListsArr1 = Array.from(myLists) //*Array'e çevir
console.log(myListsArr1);
myListsArr1.map( (li) => (li.style.listStyleType = "none"))

//!=========================================================
//!               GETELEMENTBYCLASSNAME()
//!=========================================================

const lists = document.getElementsByClassName("list")  //HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
console.log(lists); 

const listsArr = [...lists]
listsArr.forEach( (li) => console.log(li))


//list[2].innerHTML = "Javascript language"
lists[2].innerHTML = `<h1> Javascript </h1>`   //Html codunu pars eder direk html yazamış gibi olursun
lists[3].innerText = `<h1> React </h1>`   
lists[4].textContent = `<h1> VUE </h1>`





//!=========================================================
//!               QUERYSELECTOR()
//!=========================================================
//?Query selector ile id, tag, class seçilebilir.
//?bu secici akista gördügü ilk elementi secer.


//*Id ile secilirken
const header = document.querySelector("#header")
console.log(header)

//* class secildi
const itemLists = document.querySelector(".list")
console.log(itemLists)


//* h2 tag'ı secilmis oldu.
const h2 = document.querySelector("h2")
console.log(h2);

//* CSS deki selector mantiti kullanilir

const otherH2 = document.querySelector("section h2")


const buton = document.querySelector("section.add-item #btn")
console.log(buton);


const react = document.querySelector("section.item-list ul li:nth-child(4")
console.log(react);


//!=========================================================
//!               QUERYSLECTORALL()
//!=========================================================


const listeler = document.querySelectorAll("ul li")
console.log(listeler);  //*NodeList(5) [li.list, li.list, li.list, li.list, li.list]