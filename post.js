function heloJSON(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(result =>displayPost((result))
    );
}
/**
 * 1- Get the container element where you want to add the new elements
 * 2-Create child element
 * 3-Set inner =Text or innerHTML
 * 4-apperndChild
 */
function displayPost(posts){
    const postContainer =document.getElementById('post-container');

    for(const post of posts)
    {
        const postDiv =document.createElement('div');
        console.log(post)
        postDiv.innerHTML =`
        <h4>User-${post.userId} </h4>
        <h5>Post: ${post.title} </h5>
        <p>Post Description:-${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }

}