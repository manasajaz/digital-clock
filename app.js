// mypara = document.getElementById("my_para");
// mypara.innerHTML = "anas";

// mypara.style.backgroundColor = "black";
// mypara.style.color = "white";

// setInterval(function(){

//     // if(mypara.style.display === "none"){
//     //     mypara.style.display = "block"
//     // }
//     // else{
//     //     mypara.style.display = "none"
//     // }
// },500)

// mypara = document.getElementById("my_para");
// mypara.innerHTML = "anas";

// mypara.style.backgroundColor = "black";
// mypara.style.color = "white";
// mypara.style.width = "100%"
// setInterval(function(){
//   let  width = mypara.style.width
//   if(width=== "100%"){
//     mypara.style.width = "10%"
//   }
//   else{
//    width = +width.replace("%","")
//    mypara.style.width  = width + 20 + "%"
//   }

// },500)

// mypara = document.getElementById("my_para");
// mypara.innerHTML = "anas";

// setInterval(function () {
//     let color1 = Math.round(Math.random() *16777215).toString(16);
//     let color2 = Math.round(Math.random() *16777215).toString(16);
//     mypara.style.backgroundColor = "#"+color1;
//     mypara.style.color = "#"+color2;

// // }, 500)
// let date = new Date();
// let BD = new Date()
//  BD.setDate(17);
//  BD.setMonth(08)
//  BD.setFullYear(2002)

// let Age= date.getTime()- BD.getTime();
// console.log((Age/(1000 *60 * 60 * 24 * 365.25)).toFixed(1))

let Hours = document.getElementById("Hours");
let Minutes = document.getElementById("Minutes");
let Seconds = document.getElementById("Seconds");
let AMPM = document.getElementById("AMPM");

setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let aMpM = "AM";
  if (hours >= 12) {
    aMpM = "pm";
    if (hours > 12) {
      // hours = hours-12
      hours -= 12;
    }
  }
  Hours.innerText = hours;
  Minutes.innerText = date.getMinutes();
  Seconds.innerText = date.getSeconds();
  AMPM.innerText = aMpM;
}, 1000);
