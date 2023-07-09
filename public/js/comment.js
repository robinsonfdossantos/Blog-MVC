const newCommentHandler = async (event) => {
    event.preventDefault();
    
    const description = document.querySelector('#comment-desc').value.trim();
    const postId = document.getElementById('#blogpost-id'); 
    var post_id = dataElement.getAttribute('data-id');
    console.log(post_id); 

    if (description) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ description, postId }), 
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                fetch('/api/posts/' + post_id, { 
                    method: 'GET',
                });
                window.location.reload();
            } else {
                alert('Failed to create comment');
            } 
        })
    }
}

document
    .querySelector('.new-comment-form') 
    .addEventListener('submit', newCommentHandler);