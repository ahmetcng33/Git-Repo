// const number = prompt("Kaç adet sayı üretmek istersiniz : ?")

// for(let sayac = 1 ; sayac <= number; sayac++){
//     const rastgeleSayi = Math.ceil(Math.random()*100)
//     console.log(`${sayac}. sayiniz :  ${rastgeleSayi} `);
// }

let not = prompt("0-100 arası bir not giriniz")
while(not<0 || not>100){
    not = prompt("lütfen 0-100 arası not gir aq")
}