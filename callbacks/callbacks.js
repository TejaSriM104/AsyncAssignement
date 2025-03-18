// callbacks.js

document.getElementById('executeButton').addEventListener('click', function() {
    // Simulate a 5-second delay using a callback
    setTimeout(function() {
      document.getElementById('message').innerText = "Callback executed after 5 seconds";
    }, 5000);
  });
  