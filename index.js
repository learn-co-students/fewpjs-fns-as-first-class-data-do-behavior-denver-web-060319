/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString)
{
  let comparsionTime = timeString.split(':').join('');
  let numTime = parseInt(comparsionTime);
  
   if(numTime >= 0 &&  numTime < 1200)
  {
    return 'Good Morning';
  }
  else if(numTime >= 1200 && numTime < 1700)
  {
    return 'Good Afternoon';
  }
  else if(numTime > 1700)
  {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message)
{
  document.getElementById('greeting').innerText = message;
}