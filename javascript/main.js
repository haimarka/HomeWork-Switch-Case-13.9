//1
// var multi;
// var num = 2
// if(num == 2){
//     multi =  num * 2;
// }


//2
// else if(num == 5){
//     multi = num * 5;
// }


//3
// else if(num == 7){
//     multi = num * 7;
// }

//4
// else if(num == 10){
//     multi = num * 10;
// }

// else{
//     console.log(num);
// }

// console.log(multi);

// let num = 10;
// switch (num){
//     case 2: 
//     console.log(num * 2);
//     break;
//     case 5: 
//     console.log(num * 5);
//     break;
//     case 7: 
//     console.log(num * 7);
//     break;
//     case 10: 
//     console.log(num * 10);
//     break;
//     default:
//         console.log(num);
//     break;
// }

// let num = 1;
// switch (num){
//     case 1: 
//     console.log("sunday");
//     break;
//     case 2: 
//     console.log("monday");
//     break;
//     case 3: 
//     console.log("tusday");
//     break;
//     case 4: 
//     console.log("wensday");
//     break;
//     case 5: 
//     console.log("thursday");
//     break;
//     case 6: 
//     console.log("friday");
//     break;
//     case 7: 
//     console.log("saturday");
//     break;
//     default:
//         console.log("not a day");
//     break;
// }

// var object = 
// {
//     name : "haim",
//     email: "haim@arka",
//     type: "admin",
// }

// switch (object.type){
//     case "admin":
//         console.log( "you are admin");
//     break;
//     case "super-admin":
//         console.log( "you are a super admin"
//         );
//     break;
//     default: "client";
//         console.log( "you are our loyal client");
//     break;
    
   
// }

//5
//5.a

// var button1 = document.getElementById("btn1");
// var button2 = document.getElementById("btn2");
// var button3 = document.getElementById("btn3");
// var button4 = document.getElementById("btn4");
// var button5 = document.getElementById("btn5");

// button1.onclick = ()=>{printeByFruit("banana")};
// button2.onclick = ()=>{printeByFruit("apple")};
// button3.onclick = ()=>{printeByFruit("melon")};
// button4.onclick = ()=>{printeByFruit("avokado")};
// button5.onclick = ()=>{printeByFruit("orange")};
// function printeByFruit(fruit){
//     switch(fruit){
//         case "banana":
//             console.log("banana");
//         break;
//         case "apple":
//             console.log("apple");
//         break;
//         case "melon":
//             console.log("melon");
//         break;
//         case "avokado":
//             console.log("avokado");
//         break;
//         case "orange":
//             console.log("orange");
//         break;
//         default:
//             console.log("not in the list");
//         break;
//     }
// }

// var car = [
//     {
//         model: "mazda",
//         year: 2020,
//         price: 400,
//         Discount: 25,
//         img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2017_FAW-Mazda_CX-4%2C_front_8.14.18.jpg/1200px-2017_FAW-Mazda_CX-4%2C_front_8.14.18.jpg"
//     },
//     {
//         model: "fiat",
//         year: 2021,
//         price: 500,
//         Discount: 10,
//         img: "https://m.media-amazon.com/images/I/81lKVnvMiyL._AC_SL1500_.jpg"
//     },
//     {
//         model: "opal",
//         year: 2022,
//         price: 600,
//         Discount: 20,
//         img: "https://s1.cdn.autoevolution.com/images/models/OPEL_Mokka-e-2020_main.jpg"
//     },
//     {
//         model: "BMW",
//         year: 2023,
//         price: 700,
//         Discount: 20,
//         img: "https://royaltyil.com/wp-content/uploads/2017/02/2016-bmw-i8.jpg"
//     },
//     {
//         model: "toyota",
//         year: 2024,
//         price: 800,
//         Discount: 20,
//         img: "https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/il/product-token/57caac2b-c7f9-42a1-979f-ed28c7640789/vehicle/d567a818-1be3-4193-962f-9c55038b9524/image-quality/70/day-exterior-4_2na.png"
//     },
// ];

// //6.a
// for (let i = 0; i < car.length; i++) {
//     diva.innerHTML += 
//     `<br><img src="${car[i].img}" height="400px" width="600px"> 
//     <div><h2>${car[i].model}</h2>
//      ${car[i].year}<br>
//      ${car[i].price}<br>
//      ${car[i].Discount}<br></div>`
    
//     switch(car.Discount){
//         case 25:
//             console.log("crazy sell");
//         break;
//         case 10:
//             console.log("good deal for you");
//         break;
//         case 7:
//             console.log("not bad");
//         break;
//         case 3:
//             console.log( "this is joke");
//         break;
//         default:
//             console.log("you have no Discount");
//         break;
//     }
    
// }


