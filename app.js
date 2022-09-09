"use strict"
const elForm = document.querySelector(".form")

const select = document.querySelector('.form-select'),
span=document.querySelectorAll('.span'),
typeFormChek=document.querySelector('.tarkibi'),
buyurtma=document.querySelector('.section_buyurtma_text'),
qoshimchlar=document.querySelector('.Qoshimcha_btn')
// btn=document.querySelector('.btn');

let elNon = document.querySelector('.non')
let elKattaligi = document.querySelector('.kattaligi')
let elUstida = document.querySelector(".ustida")
let elqoshimchalar =document.querySelector(".qoshimcha")
console.log(elqoshimchalar);

select.addEventListener("change", (evt) => {
    elNon.textContent = select.value;
})

span.forEach(item => {
    item.addEventListener("click", (evt) => {
        let value = evt.target.innerText
        elKattaligi.textContent = "Kattaligi: " + value
    })
})


let arr = [];

typeFormChek.addEventListener("change", (evt) => {
    let value = evt.path[0].labels[0].innerText
    let inputCheck = evt.srcElement;
    console.log(evt.target);

    if(inputCheck.checked) {
        if(!arr.includes(value)) {
            arr.push(value)
        }
    }
    if(!inputCheck.checked){
        if(arr.includes(value)) {
            let index =  arr.indexOf(value)
            arr.splice(index,1)
        }
        
    }


    elUstida.innerHTML = "";

    arr.forEach(item => {
        elUstida.innerHTML += `
        <span>${item}</span>,
        `
    })
})

let arr2 = []

qoshimchlar.addEventListener("change", (evt) => {
    let value = evt.path[0].labels[0].innerText
    let inputCheck = evt.srcElement;
    console.log(value);

    if(inputCheck.checked) {
        if(!arr2.includes(value)) {
            arr2.push(value)
        }
    }
    if(!inputCheck.checked){
        if(arr2.includes(value)) {
            let index =  arr2.indexOf(value)
            arr2.splice(index,1)
        }
    }

    console.log(arr2);

    elqoshimchalar.innerHTML = "";

    arr2.forEach(item => {
        elqoshimchalar.innerHTML += `
        <span>${item}</span>,
        `
    })
})





// 3-OY IMTIHON MASALA

// ========1-masala========
// const array = ['a', 'a', 'a', 'a', 'a', 1, 1, 1, 1, 3, 3, 5, 5, 5, 5, 7, 7, ]
// let arr = []

// // for (let i = 0; i < array.length; i++){

// // }
// array.filter((item) => {
//     if (item == item) {
//         console.log(item);
//     }
// })



// =======2-masala========  
// let a=+prompt("a sonn");
// let b=+prompt("b son");
// let arr=[];

// for(let i=a; i<=b; i++){
// arr.push(i)

// }
// console.log(arr);


// ========3-mashq==========
// let x = +prompt("index1");
// let y = +prompt("index2");
// let text = [];
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//   if (x === i) {
//     continue;
//   } else if (y === i) {
//     continue;
//   } else {
//     console.log();
//   }
//   console.log(array[i]);
// }


// =========4-masala========
// let array = [
//     {
//       isname: "Umar",
//       age: 40,
//       jop: "Khalifa",
//     },
//     {
//       isname: "AL Xorazmi",
//       age: 25,
//       jop: "Olim",
//     },
//     {
//       isname: "Usmin",
//       info: "Zinnurayin",
//       jop: "Qori",
//     },
//   ];
//   let ss=[]
//   array.forEach((e) => {
//     for (let key in e) {
//      ss.push(e[key])
//    }
//   });
//   console.log(ss);



// masala 5
// let arr=['name', 'Temur', 'age', 30, 'isMArried', false, 'hobby', ['sleep', 'UFC']]
// let bb={};

// for(let i=0; i<arr.length; i+=2){
// console.log(i);
// bb[`${arr[i]}`]= arr[i+1];
// }

// console.log(bb);
