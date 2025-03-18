// async-await.js

document.getElementById('executeButton').addEventListener('click', async function() {
    // Display loading text while waiting for the data
    document.getElementById('message').innerText = "Loading...";
  
    try {
      const response = await fetch('https://dummyjson.com/posts');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const postTitles = data.posts.map(post => post.title).join('<br>');
      document.getElementById('message').innerHTML = postTitles;
    } catch (error) {
      document.getElementById('message').innerText = "Error fetching data: " + error.message;
    }
  });
  