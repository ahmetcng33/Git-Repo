console.log("JS dosyasi baglandi");


// var deneme = 5;

// varDeneme = 6;

// let myVar = 5;

// const myVar1= 6;



//!  Aritmetiksel operatörler

//+, -, *, /, %, **


// const num1 = 10;
// const num2 = 69;

// const toplam = num1 + num2;  //num1 ve num2 operand, 
// //+ operator olarak adlandırılır

// console.log(toplam);

// const msg1 = "Hello"
// const msg2  = "World!"
// //console.log(msg1 + " " + msg2); 

// const cümle = msg1 + " " + msg2;   //?  +  operatörü String Concatenation işlemi de yapar
// console.log(cümle);


//! Template Literals (Es6 ile gelen bir özellik)

// console.log(`${msg1} ${msg2}`);
// // console.log(cümle);


// const num3 = "6";
// const num4 = "7";
// console.log(num3 + num4);
// console.log(num3 + 7);//67 js otamatik tip dönüşümü yaparak buradaki ifadeyi concatenat eti.
//? + operatöründe string değişken üstün gelir ve dönüşümü stringe yapar 76 çıktısını verdi.



//! - operatörü

// const x = 55;
// const y = 44;

// console.log(x - y);

// const myNum= "1";
// console.log(x - myNum);//54. - operatöründe string değişkeni numbera çevirir.
// const yourNum = "one"
// console.log(x - yourNum);//NaN(not a number)
// //? string ifadeyi numbera dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu NaN döndürüyor matematiksel olarak belirsiz veya tanımsız bir değer temsil eder.

//! * operatörü

// let carp1 = 7;
// let carp2 = 9;
// console.log(carp1 * carp2); // 63

// console.log("a" * "b"); // NaN
// console.log("a" * 3); // NaN

// console.log("5" * "9"); // 45. karakterler numeric ise numebr gibi davranarak işlemi gerçekleştiriyor.
// console.log(typeof ("5" * "9")); // number


//! / operatörü

// const böl1 = 81;
// const böl2 = 9;

// console.log(böl1 / böl2); // 9

// console.log(böl1 / "9"); // 9
// console.log(böl1 / "dokuz"); // NaN

// console.log(böl2 / 0); // Infinity
// console.log(-61 / 0); // -Infinity
// //? JavaScript ile sonsuzluk-sınır değerini ifade etmek için Infinity veya -Infinity anahtar kelimesi kullanılır. Bir sayının 0'a bölünmesi Infinity veya –Infinity değeri döndürür.

// console.log(0 / 5); // 0

// console.log(57/5);

//! % (mod alma) operatörü (bölümdeki kalan sayıyı bulur)


// const mod1 = 57;
// const mod2 = 9;
// console.log(mod1 % mod2);


// const benimSayim = 967;

// const birlerBas = benimSayim%10;
// console.log(birlerBas);
// const onlarBas = (benimSayim%100 - benimSayim%10)/10;
// console.log(onlarBas);
// const yüzlerBas = benimSayim /100; //9.67
// console.log(yüzlerBas);

//?Bazi hazır fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tam sayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam sayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.
// toFixed(basamakSayısı): // . dan sonra parantezin içine verdiğimiz sayı kadar basamak alır. Eğer noktadan sonraki basamak sayısı içine verdiğimiz sayıdan büyükse sondaki rakamı bir artırır.

// console.log(`Yüzlerbas: ${Math.trunc(yüzlerBas)}, Onlarbas: ${Math.trunc(onlarBas)}, BirlerBas : ${birlerBas}`);

// const randomNum = Math.trunc((Math.random() *100))
// console.log(randomNum);


//! ** (üs alma) operatörü

// const üs1 = 2;
// const üs2= 3;
// console.log(üs1 ** üs2);

// const pi = 3.14;
// const yariCap = 9;

// const alan = Math.trunc(pi * yariCap ** 2);
// console.log(alan);

//! 🔥🔥🔥              Artırma ve Eksiltme Operatörleri

//? ++ ve -- operatörleri 1 artırır veya 1 eksiltir

// // sonrası artırma ve eksiltme
// let number1 = 6;
// //  let artirNew = number1 // 6
// //  number1= number1 +1// 7
// let number1New = number1++; // önce atadı sonrasında number1 değişkenini bir number1dı
// console.log(number1New); // 6
// console.log(number1New); // 6
// console.log(number1); // 7
// console.log(number1New);


// let num= 5;
// let newNum = num++;
// //önce atadı sonra arttırdı
// console.log(newNum);
// console.log(num);

// let newNum2 = ++num;
// // önce artır sonra ata
// console.log(newNum2);

//! 🔥🔥🔥              Atama Operatörleri

let nums1 = 14;
let nums2 = 17;
//! += Ekle ve Sonucu Ata
// nums2 = nums2 + nums1;
//? yukarıdaki gibi uzun uzun yazmak yerine += operatörünü kullanarak işlemimi kısaltmış oldum. Aynı şekilde diğer operatörler içinde geçerli.
// nums2 += nums1;
// console.log(nums2); // 31

let num14 = 6;
let num15 = 3;

//! -= Çıkar ve Sonucu Ata
// num14 = num14 - num15;
// num14 -= num15;
// console.log(num14); // 3

//! *= Çarp ve Sonucu Ata
// num14 = num14 * num15;
num14 *= num15;
console.log(num14); //18
//! /= Böl ve Sonucu Ata
// num14 = num14 / num15;
// num14 /= num15;
// console.log(num14);
//! /= Bölümden Kalanı Bul ve Ata
// num14 = num14 % num15;
// num14 %= num15;
// console.log(num14);

//! **= Üs Al ve Sonucu Ata
// num14 = num14 ** num15;
// num14 **= num15;
// console.log(num14);


//! 🔥🔥🔥              Karşılaştırma Operatörleri

const num16 = 27;

// console.log(num16 == 27); //true
// console.log(num16 == "27"); // true
//? == (eşitlik operatörü), iki değeri karşılaştırırken tip dönüşümü yapar. Eğer karşılaştırılan değerler farklı tiplerde ise, JavaScript otomatik olarak bu değerleri aynı tipe dönüştürerek karşılaştırma yapar. Bu işlem sırasında, değerler eşitlenebilir bir forma getirilir ve ardından karşılaştırılır.

// console.log(num16 === 27); // true
// console.log(num16 === "27"); // false
// //? === operatörü otomatik tip dönüşümü yapmadığından dolayı, farklı tiplerdeki değerleri eşit olarak kabul etmez.tip ve değer aynı mı diye sorgular.

// // const user1 = prompt("Lütfen bir sayı griniz: ");
// // const user2 = prompt("Lütfen bir sayı griniz: ");
// // console.log(user1);
// // console.log(user2);
// // const isSame = user1 == user2;
// // console.log(isSame);

// console.log(true == 1); //true
// console.log(null == undefined); // true
// // true boolean değeri 1 sayısı ile eşit kabul edilir, null ve undefined ise birbirine eşit kabul edilir.
// console.log(true === 1); // false
// console.log(null === undefined); // false

//? !=, !==

// console.log(15 != "15"); // false. çünkü değerleri eşit
// console.log(15 !== "15"); // true. çünkü typeları eşit değil

// //? >, < (Büyük mü?, Küçük mü?)
// console.log(15 > 5); // true
// console.log(15 < 5); // false

// console.log("15" > 5); // true

// console.log("a" > "b"); // false.String ifadelerde ASCII'ye gore kiyaslama yapilir.
// console.log("a".charCodeAt()); // 97
// console.log("b".charCodeAt()); // 98
// //. .charCodeAt() metodu string karakterin ASCII karşılığını verir.
// console.log("a" > "A");// true

//? >=, <= (Büyük veya eşit mi?, Küçük veya eşit mi?)

// console.log(15 >= 15); //true
// console.log(15 <= 15); // true
// console.log(15 >= 16); // false
// // console.log(15 >== "15");// error verir. Çünkü bu şekilde karşılaştırma operatörü bulunmuyor.
// console.log(15 >= "15"); // true
// console.log("14" <= "15"); // true

//! 🔥🔥🔥              Mantıksal Operatörler

// && and
console.log(true && true); // true
console.log(" " && true); // true

console.log(5 && "Merhaba"); // "Merhaba"
console.log(0 && "Dünya"); // 0
// && operatoru ilk gördüğü falsy veya false değerini döner.
console.log(5 && 0); // 0
console.log(true && false); // false

//! || or
console.log(true || false); //true
console.log(5 || 15); // 5
console.log(5 || 0); // 5
console.log("" || "Merhaba"); // "Merhaba"
console.log("" || 0); // 0
// || operatoru true ve truthy değer arar. ilk gördüğü true veya truthy döner.Bulamazsa son gördüğü false veya falsy değeri döner.

// ! not
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!5); // false

// falsy
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean("")); // false (boş string)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// truthy
console.log(Boolean(true)); // true
console.log(Boolean({})); // true (boş object)
console.log(Boolean([])); // true (boş array)
console.log(Boolean(5)); // true
console.log(Boolean("0")); // true (dolu string)
console.log(Boolean("false")); // true (dolu string)
console.log(Boolean(Infinity)); // true
console.log(Boolean(new Date())); // true (tarih methodları)
console.log(Boolean(function () {})); // true (boş fonksiyon)
console.log(
  Boolean(function () {
    console.log("Hello World!");
  })
); // true (boş fonksiyon)

//! İşlem Önceliği sıralaması
// 1. ! (not)
// 2. && (and)
// 3. || (or)
const karşilaştırma = ("merhaba" && "dünya") || false || (28 && 67 && !0);
console.log(karşilaştırma); // dünya
