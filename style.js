// let string = " ";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       document.querySelector("input").value = string;
//     } 
//     else if(e.target.innerHTML == 'AC'){
//         string = ""
//         document.querySelector('input').value = string;
//       }
//     else {
//       console.log(e.target);
//       string = string + e.target.innerHTML;
//       document.querySelector("input").value = string;
//     }
//   });
// });




let string = "";

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        document.querySelector("input").value = string;
      } catch (error) {
        document.querySelector("input").value = "Error";
      }
    } else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == '<span class="material-symbols-outlined">backspace</span>') {
    
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});