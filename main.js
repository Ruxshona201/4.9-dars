// uyga vazifa
// let arr = [ 1, 2, 3, 4, 5]

// // console.log(arr[0]);

// console.log(arr.length); // uzunligi
// console.log(arr[arr.length - 1]); //oxirgi elementi

// arr[0] = 3
// console.log(arr)

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arrayni elementlarini ularning indexlari kopaytmasi bilan almashtiring.
// let arr = [ 1, 2, 3, 4, 5]
// for(let i = 0; i < arr.length; i++) {
// arr[i] = arr[i] * i;
// }
//  console.log(arr);

//  0-9 gacha raqamlarni kiritilganda ularni so'z bilan ifodalang bunda massiv ishlating.
// let nums = ["nol", "bir", "ikki", "uch", "to'rt"];

// const number = +prompt("son");
// console.log(nums[number]);

// 51.
function oshir1ga(num) {
  return num + 1;
}
console.log(oshir1ga(9));
// 52.
// const ism = "Doniyor";
// const familya = "Olimov";
// const empty = " ";
// const result = ism + empty + familya;
// console.log(result);

// 53.
var holatiYaxshimi = true;
var holati;
if (holatiYaxshimi) {
  holati = "yaxshi";
} else {
  holati = "yaxshi emas";
}
console.log(holati);

// 54.
function sozUzunligi(str) {
  if (str.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(sozUzunligi("apples"));
console.log(sozUzunligi("pears"));

// 55.
function daraja(x, y) {
  let natija = x * y * y;
  console.log(natija);
}
daraja(5, 5);
daraja(10, 10);
daraja(3, 3);
// 56.
// let arr = ["cat", "dog", "duck"]
// console.log(arr[arr.length -1]);

// 57.
// 1-usul
function kabisa(yil) {
  if (yil % 4 === 0) {
    if (yil % 100 === 0) {
      if (yil % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
console.log(kabisa(2020));
console.log(kabisa(2021));
console.log(kabisa(1968));
//   2-usul
// let kabisa = prompt("kabisa yilini topish!");

// if(kabisa / 4,100,400) {
//     console.log("bu kabisa yili");
// } else {
//     console.log("Kabisa yili emas");
// }

// 58.

// 59.
function teskariBool(bool) {
  if (bool == "true") {
    console.log("false");
  } else if (bool == "false") {
    console.log("true");
  }
}
teskariBool("true");
teskariBool("false");

// 60.
function juftmiToq (son) {
    if (son % 2 == 0) {
        console.log("Juft");
    } else {
        console.log("toq");
    }
}
console.log(juftmiToq(146));
console.log(juftmiToq(19));
// 62.
const mevalar = ["a", "b", "c", "d", "e","f"];
console.log(mevalar.join(""));

// 63.
// let nums = ["nol", "bir", "ikki", "uch", "to'rt"];

// const number = +prompt("son");
// console.log(nums[number]);

// 64.
function kubikchalar(arr) {
    return arr * arr * 6
}
console.log(kubikchalar(1));
console.log(kubikchalar(2));
console.log(kubikchalar(3));
    
// 65.
function boshJoy(str) {
    if(str == "") {
        console.log("false")
    } else{
        console.log("true");
    }
    }
    boshJoy("hello");
    boshJoy("hello, world");
    boshJoy(" ");
    boshJoy("");
    boshJoy(",./!@#");