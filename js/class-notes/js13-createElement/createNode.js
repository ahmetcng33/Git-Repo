console.log("****   CREATE NODE   ****")

const langInput = document.querySelector("#input")
//! 1 - Olustur
const newP = document.createElement("p")

//! 2 - Eger text tabanlı bir element ise text dugumunu olustur
// const text = document.createTextNode("Bu bir yeni p elementidir")
const text = document.createTextNode(langInput.value)

//! 3 - Olusturulan text dugumunu yeni elemente bagla (append)
newP.appendChild(text)

console.log(newP)




