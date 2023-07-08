// Get the new post form
const newPostForm = document.querySelector('.new-blogpost-form');

// Add event listener to the submit button
newPostForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve the values from the form inputs
  const blogNameInput = document.getElementById('blogpost-name');
  const blogContInput = document.getElementById('blogpost-cont');
  const blogName = blogNameInput.value;
  const blogCont = blogContInput.value;

  // Perform the new post action
  createNewPost(blogName, blogCont);
});

// Function to perform the new post action
function createNewPost(blogName, blogCont) {
  // Make an API call to create a new post
  fetch('/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: blogName, content: blogCont }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Check if the response contains the newly created post data
      if (data && data.id) {
        // New post creation successful, update the UI or perform any necessary actions
        console.log('New post created successfully:', data);
        // Reset the form fields after successful submission
        blogNameInput.value = '';
        blogContInput.value = '';
      } else {
        // Handle error case if the new post creation was unsuccessful
        console.error('Failed to create a new post:', data);
      }
    })
    .catch((error) => {
      console.error('An error occurred while creating a new post:', error);
    });
}


