/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let time = parseInt(timeString)
  let msg
  if (time < 12) {
    msg = "Good Morning"
  } else if (time >= 12 && time <= 17) {
    msg = "Good Afternoon"
  } else {
    msg = "Good Evening"
  }
  return msg
}

function displayMessage(msg) {
  let text = document.getElementById("greeting")
  text.innerText = msg   
}