
document.getElementById('comment-box').addEventListener('keydown',function(event) {
    
    const submitBtn = document.getElementById('post-btn');
    if (event.key === 'Enter') {
        event.preventDefault();
        submitBtn.click(); 
    }
})


document.getElementById('post-btn').addEventListener('click',function() {
    
    const commentBox = document.getElementById('comment-box');
    const newComment = commentBox.value;
    
    const commentContainer = document.getElementById('comment-container');
    const pElement = document.createElement('p');
    pElement.innerText = newComment;
    commentContainer.appendChild(pElement);
    
    commentBox.value = '';   
})