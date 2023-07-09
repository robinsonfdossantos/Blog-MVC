// Get the new post form
const newPostForm = document.querySelector('.new-blogpost-form');

newPostForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const blogNameInput = document.getElementById('blogpost-name');
  const blogContInput = document.getElementById('blogpost-cont');
  const blogName = blogNameInput.value;
  const blogCont = blogContInput.value;

  createNewPost(blogName, blogCont);
});

function createNewPost(blogName, blogCont) {
  fetch('/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: blogName, content: blogCont }),
  })
    .then((response) => response.json())
    .then((data) => {
   
      if (data && data.id) {

        console.log('New post created successfully:', data);

        blogName.value = '';
        blogCont.value = '';
        location.reload();
      } else {

        console.error('Failed to create a new post:', data);
      }
    })
    .catch((error) => {
      console.error('An error occurred while creating a new post:', error);
    });
}


