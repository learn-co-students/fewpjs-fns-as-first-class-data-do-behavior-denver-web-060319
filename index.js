/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  const hour = parseInt(string, 10)
  if (hour > 17) return "Good Evening"
  if (hour < 12) return "Good Morning"
  return "Good Afternoon" 
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = string
}
