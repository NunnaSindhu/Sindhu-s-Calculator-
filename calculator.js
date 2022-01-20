//create html Elements, setting attributes and content to the elements
document.body.innerHTML=`
<div id="button-container">
<div id="res"></div>
<div id="btns">
<button id="btnClr">C</button>
        <button id="btnCE" >CE</button>
        <button class="btn">%</button>
        <button class="btn">/</button>
        <button class="btn">7</button>
        <button class="btn">8</button>
        <button class="btn">9</button>
        <button class="btn">*</button>       
        <button class="btn">4</button>
        <button class="btn">5</button>
        <button class="btn">6</button>
        <button class="btn">-</button>       
        <button class="btn">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
        <button class="btn">+</button>
        <button class="btn">0</button>
        <button class="btn">00</button>
        <button class="btn"t">.</button>
        <button id="btnEql">=</button>
</div>
</div>
`;

//select the target element for displaying the data
let display = document.getElementById("res");

//creating key events to the numbers from keyboard

document.addEventListener("keypress", (event) => {
  const keyName = event.key;
if((keyName ==='0')||(keyName ==='1')||(keyName ==='2')||(keyName ==='3')
 ||(keyName ==='4')||(keyName ==='5')||(keyName ==='6')||(keyName ==='7')
 ||(keyName ==='8')||(keyName ==='9'))
  {
    display.innerHTML += keyName;
  }
    
else {
  alert("Only numbers are allowed");
}
});

//creating click events to the numbers

const element = document.querySelectorAll(".btn");
for(let i = 0; i < element.length; i++){
  element[i].addEventListener("click", () => {
    display.innerHTML +=element[i].innerHTML;
  });
}

//ckecking operators logic
function checkOperator() {
  if (
    display.innerHTML.endsWith("+") ||
    display.innerHTML.endsWith("-") ||
    display.innerHTML.endsWith("*") ||
    display.innerHTML.endsWith("/") ||
    display.innerHTML.endsWith("%")
  ) {
    return true;
  }
}

// logic for implementing operations upon clicking equal to button

let btnEql = document.getElementById("btnEql");
btnEql.addEventListener("click", function () {
  if (!checkOperator()) {
    let result = eval(display.innerHTML);
    display.innerHTML = result;
  }
  else{
    alert("last entry must be an operand");
  }
  });

//  logic to crear the screen
let btnClr = document.getElementById("btnClr");
btnClr.addEventListener("click", function () {
  display.innerHTML = "";
});

//Logic for deleting most recent entry   
let btnCE= document.getElementById("btnCE");
btnCE.addEventListener("click", function () {
display.innerHTML = display.innerHTML.split("").slice(0,-1).join("");
});

