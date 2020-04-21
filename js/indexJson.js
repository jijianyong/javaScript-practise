async function getDate() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // console.log(posts);

    const root = document.querySelector('#root');
    const ul = document.createElement('ul');

    posts.forEach(post => {
        const li = document.createElement('li');
        const actor = document.createElement('a');

        actor.appendChild(document.createTextNode(post.title));
        actor.setAttribute("href",'https://jsonplaceholder.typicode.com/posts${post.id}');

        li.appendChild(actor);
        ul.appendChild(li);
    });

    root.appendChild(ul);

    
}
getDate();

