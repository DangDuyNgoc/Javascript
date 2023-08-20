var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(reponse){
        return reponse.json();
    })
    .then(function(post){
        var htmls = post.map(function(posts){
            return `<li>
                <h2> ${posts.title} </h2>
                <p> ${posts.body} </p>
            </li>`
        });

        var html =htmls.join('');
        document.getElementById('post-block').innerHTML = html;

    })
    .catch(function(err){
        alert(err, 'co loi');
    })