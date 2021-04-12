const btnCommentSend = document.getElementsByClassName('commentSend');


//envoi d un commentaire NE FONCTIONNE PAS 
btnCommentSend.addEventListener('click', function (event) {
    event.preventDefault();

    let message = {
    'comment' : document.getElementsById('commentUserConnect').value,
    'tchatId': info.id
    }
    let sendComment = JSON.stringify(message)

    fetch('http://localhost:3000' + '/comment', {
        method: "post",
        headers: {"Content-Type": "application/json;charset=UTF-8"},
        mode:"cors",
        body: sendComment           
    })  .then(function(response) {
        return response.json();
    }) 
    .then(function(listComments){
        for(let message of listComments) {
            let comment = new Comments(message);
            commentsUsers.innerHTML += comment.displayComment();
        }
        // let commentUser = {
        //     comment: data.message.comment,
        //     id: data.message.id
        // }
        // sessionStorage.setItem("comment", JSON.stringify(commentUser));
        // window.location.reload(); 
    })
    .catch(function(err) { //le retour en cas de non connection au serveur 
        console.log('api problem: ' + err.message);
    })
})