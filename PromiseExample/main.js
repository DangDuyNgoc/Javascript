var users = [
    {
        id: 1,
        name: 'toi',
        age: 19
    },
    {
        id: 2,
        name: 'em',
        age: 18
    },
    {
        id: 3,
        name: 'he',
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Co the ra ngoai cung anh khong?' 
    },
    {
        id: 2,
        user_id: 2,
        content: 'Em xin loi! Nay em ban' 
    }
];

/*
    1. lấy ra comments
    2. từ comments  ra user_id, từ user_id lấy ra user
*/

function getComments() {
    return new Promise(function(resolve){
        resolve(comments);
    });
};

function getUsersByIds(userIds) {
    return new Promise(function(resolve){
        var result = users.filter(function(user){ // lọc ra những users nằm trong userIds
            return userIds.includes(user.id);
        });
        console.log(result);
        resolve(result);
    });
}

getComments()
    .then(function (comments) {
        console.log(comments); // lấy comments
        var userIds = comments.map(function (element) {
            return element.user_id; // lọc trong mảng comments vừa nhận được để lấy ra user_id;
        });
        console.log(userIds); // nhận lại mảng chỉ chứa 1, 2. Viết hàm getUsersByIds để 
        // chọc vào users lấy ra id
        return getUsersByIds(userIds)
            .then(function (user) {
                console.log(user);
                return {
                    user: user,
                    comments: comments,
                };
            });
    })

    .then(function(data){
        var commentBlock = document.getElementById('comment-block');
        console.log(commentBlock);
        var html = '';
        data.comments.forEach(comment => {
            var user = data.user.find(function(customs){
                return customs.id === comment.user_id;
            });
            console.log(user);
            html += `<li> ${user.name} : ${comment.content} </li>`
        });

        commentBlock.innerHTML =html;
    })

