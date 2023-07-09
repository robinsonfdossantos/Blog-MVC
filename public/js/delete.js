const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const postId = event.target.dataset.id;
    deletePost(postId);
  });
});

function deletePost(postId) {
  fetch(`/api/post/${postId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
    //  if (data && data.message === 'Post deleted successfully') {
    //    console.log('Post deleted successfully');
    //     event.target.closest('.user-blogpost-names-list-item').remove();
    //     location.reload();
    //   } else {
    //     console.error('Failed to delete the post:', data);
    //   }
    location.reload();
    })
    .catch((error) => {
      console.error('An error occurred while deleting the post:', error);
    });
}
