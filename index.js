/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

const greet = (time) => {
  const parsedTime = parseInt(time)
  
  if (parsedTime < 12) {
      return "Good Morning"
  } else if (parsedTime >= 12 && parsedTime <= 17) {
      return "Good Afternoon"
  } else if (parsedTime > 17) {
      return "Good Evening"
  }
}

const displayMessage = (fn) => {
  const greeting = document.getElementById('greeting')
  greeting.innerText = fn
  return greeting
}

