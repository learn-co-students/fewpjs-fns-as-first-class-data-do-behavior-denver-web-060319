// import { parse } from "querystring";

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
  const timeArray = string.split(':')
  const hour = parseInt(timeArray[0])
  if(hour < 12 ) {
    return "Good Morning"
  }else if(hour >= 12 && hour <= 16){
    return "Good Afternoon"
  }else if(hour >= 17){
    return "Good Evening"
  }
}

function displayMessage(string) {
  const h1 = document.getElementById('greeting')
  h1.innerText = string
}
