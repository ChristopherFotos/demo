let nameInput        = document.getElementById('comments__name-input');
let commentInput     = document.getElementById('comment-input');
let commentContainer = document.getElementById('comment-container');
let submitButton     = document.getElementById('add-comment');

let commentsArray = [
    {
        name: 'John Candy',
        comment: 'Great energy. Love seeing these guys live.',
        timestamp: new Date()
    },
    {
        name: 'John Wayne',
        comment: 'Their last album was 3/10 at best. They\'re sellouts now.',
        timestamp: new Date()
    },
    {
        name: 'Jimmy Fallon',
        comment: 'I have every single one of their records, even the b-sides. Not a bad song in their whole catalog.',
        timestamp: new Date()
    }
]


// Construct a comment object using the values from the form inputs

function makeCommentObject(){
    let comment     = {}
    comment.name    = nameInput.value
    comment.comment = commentInput.value
    return comment
}

// Create an element, apply a class of comments__content to it, set its innerHTML,
// and then append it to the comment container 

function displayComment(comment){
    let newComment = document.createElement('div')
    newComment.classList = ['comments__content']
    newComment.innerHTML= 
            `
            <img src="./assets/images/avatars/1.jpg" alt="" class="comments__avatar">
            <div class="comments__text">
                <div class="comments__meta">
                    <span class="comments__name">${comment.name}</span>
                    <span class="comments__date">12/12/2018</span>
                    <div class="comments__text">
                        <p class="comments__p">
                            ${comment.comment}
                        </p>
                    </div>
                </div>
            </div>`

    commentContainer.appendChild(newComment)
}

function submitComment(){
    commentContainer.innerHTML = '';
    commentsArray.push(makeCommentObject())
    commentsArray.forEach(c => displayComment(c))
}

submitButton.addEventListener('click', e => {
    e.preventDefault()
    submitComment()
})

commentsArray.forEach(c => displayComment(c))