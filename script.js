document.addEventListener('DOMContentLoaded', () => {
    const postIdInput = document.getElementById('postId');
    const searchBtn = document.getElementById('searchBtn');
    const postContainer = document.getElementById('postContainer');
    
    searchBtn.addEventListener('click', () => {
        const postId = postIdInput.value;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments`)
            .then(response => response.json())
            .then(post => {
                const postTitle = `<h2>${post.title}</h2>`;
                const postBody = `<p>${post.body}</p>`;
                let comments = '';

                post.comments.forEach(comment => {
                    comments += `
                        <div class="comment">
                            <p><strong>${comment.email}</strong></p>
                            <p>${comment.body}</p>
                        </div>
                    `;
                });
                postContainer.innerHTML = postTitle + postBody + comments;
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
