// APIcallbacks.js

document.getElementById('executeButton').addEventListener('click', function() {
    // Simulate a 5-second delay and then fetch data from the API
    setTimeout(function() {
      fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
          const postTitles = data.posts.map(post => post.title).join('<br>');
          document.getElementById('message').innerHTML = postTitles;
        })
        .catch(error => {
          document.getElementById('message').innerText = "Error fetching data: " + error;
        });
    }, 5000);
  });
  