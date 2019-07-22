/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const time = parseInt(timeString, 10)
  console.log(timeString)
  if (time < 12) {
    return "Good Morning"
  }
  else if (time < 17) {
    return "Good Afternoon"
  }
  else if (time > 24) {
    return "That's not a real time!"
  }
  else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  const messageContainer = document.querySelector("#greeting")
  messageContainer.innerText = greeting
}