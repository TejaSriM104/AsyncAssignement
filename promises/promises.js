// promises.js

document.getElementById('executeButton').addEventListener('click', function() {
    // Display loading text while waiting for the Promise
    document.getElementById('message').innerText = "Loading...";
  
    // Create a Promise to fetch data from the API
    const fetchData = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("Operation timed out");
      }, 5000);  // Reject the promise if it takes longer than 5 seconds
  
      fetch('https://dummyjson.com/posts')
        .then(response => {
          if (!response.ok) {
            reject("Failed to fetch data: " + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          clearTimeout(timeout);  // Clear the timeout once the fetch succeeds
          resolve(data);
        })
        .catch(error => {
          clearTimeout(timeout);  // Clear the timeout if there's an error during fetch
          reject("Error fetching data: " + error);
        });
    });
  
    // Handle the promise resolution and rejection
    fetchData
      .then(data => {
        const postTitles = data.posts.map(post => post.title).join('<br>');
        document.getElementById('message').innerHTML = postTitles;
      })
      .catch(errorMessage => {
        document.getElementById('message').innerText = errorMessage;
      });
  });
  