/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

const greet = function(time) {
  if (time.slice(0,2) >= 17) {
    return 'Good Evening';
  } else if (time.slice(0,2) >= 12 && time.slice(0,2) < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Morning';
  }
}

/* Write your implementation of displayMessage() */

const displayMessage = function(string) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = `${string}`
}