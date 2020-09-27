const url = `https://jsonplaceholder.typicode.com/posts`
const posts = document.getElementsByClassName('posts')
const postsWithBlog = document.getElementById('postsWithBlog')
function getPost() {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                let h3 = document.createElement('h3')
                let paragraf = document.createElement('p')
                let hr = document.createElement("hr")
                paragraf.setAttribute("class", "main-paragraf")
                h3.setAttribute("class", "main-h3")
                h3.innerText = res[i].title
                paragraf.innerText = res[i].body
                postsWithBlog.appendChild(h3)
                postsWithBlog.appendChild(paragraf)
                postsWithBlog.appendChild(hr)
            }
        })
}