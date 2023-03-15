const pedirPosts = async () => {
    const resp = await 
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await resp.json()

    data.forEach((post) => {
        const li = document.createElement(`li`)
        li.innerHTML = `
                        <h4>${post.title}</h4>
                        <p>${post.body}</p>
                        `
            listado.appendChild(li)
    });
}

pedirPosts()