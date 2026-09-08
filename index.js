const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainer = document.getElementById("posts-container")

function renderPosts() {
    let postContent = ""

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i]
        postContent += `<article>
                            <div class="user">
                                <img src="${post.avatar}" alt="${post.name} profile picture">
                                <div class="user-info">
                                    <p>${post.name}</p>
                                    <p>${post.location}</p>
                                </div>
                            </div>

                            <img id="post-${i}" class="post-image" src="${post.post}" alt="Post by ${post.name}">

                            <div class="actions">
                                <button class="like-btn" aria-label="Like post">
                                    <img src="images/icon-heart.png" alt="">
                                </button>

                                <button class="comment-btn" aria-label="Comment on post">
                                    <img src="images/icon-comment.png" alt="">
                                </button>

                                <button class="share-btn" aria-label="Share post">
                                    <img src="images/icon-dm.png" alt="">
                                </button>
                            </div>

                            <p class="likes"><strong>${post.likes} likes</strong></p>
                            <p class="caption">
                                <strong>${post.username}</strong>
                                ${post.comment}
                            </p>
                        </article>`
    }

    postsContainer.innerHTML = postContent

    for (let i = 0; i < posts.length; i++) {
        let post = document.getElementById(`post-${i}`)
        post.addEventListener("dblclick", function() {
            posts[i].likes += 1
            renderPosts()
        })
    }

}

renderPosts()