const num1 = Math.random()*10;
const num2 = Math.random()*10;
const sum = num1 + num2;
console.log(`The sum of the ${num1} & ${num2} is ${sum} `); // above the tab button `  `

document.getElementById("addnum").innerHTML=`${sum}`; //display on HTMLpage
                        // or
// document.write(sum);  // directly display sum value on HTMLpage