const info = JSON.parse(sessionStorage.getItem("user"));
const tchat = JSON.parse(sessionStorage.getItem("tchat"));
//avatar et nom du user connecté
const avatarConnect = document.getElementById('avatarConnect');
const usernameConnect = document.getElementById('usernameConnect');

//avatar, nom et tchat des autres utilisateurs
const allTchatsMembers = document.getElementById('allTchatsMembers');
const commentsUsers = document.getElementById('commentsUsers');

// profil de l utilisateur connecté
const deleteAccount = document.getElementById('deleteAccount');

let avatar = info.avatar;
let username = info.username;

avatarConnect.innerHTML = ` <img  class="avatarSize" src="${avatar}"/> `
usernameConnect.innerHTML = `<span>${username}</span>`


//valider un tchat de user connecté
const tchatMember = document.getElementById('tchatMember');
const btnSubmitTchat = document.getElementById('btnSubmitTchat');

btnSubmitTchat.addEventListener("click", function (event) {
    event.preventDefault();
    let message = {
        'content': document.getElementById('inputTchatUserConnect').value,
        'userId': info.id
    }
    let sendMessage = JSON.stringify(message)

    fetch('http://localhost:3000' + '/tchat/', {
        method: "post",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        mode: "cors",
        body: sendMessage
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            let tchat = {
                tchatId: data.message.id,
                userId: data.message.UserId
            }
            sessionStorage.setItem("tchat", JSON.stringify(tchat));
            window.location.reload();
        })
        .catch(function (err) { //le retour en cas de non connection au serveur 
            console.log('api problem: ' + err.message);
        })
})

//faire apparaitre tous les tchats
fetch('http://localhost:3000' + '/tchat/getAll', {
    method: "get",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    mode: "cors"
}).then(function (response) {
    return response.json();
}).then(function (listTchats) {
    //afficher tous les tchats
        for (let message of listTchats) {
            let tchat = new Tchats(message);
            allTchatsMembers.innerHTML += tchat.displayTchats(info);
        }
      //supprimer un tchat par le user createur du tchat  
        const listBtnTrash = document.querySelectorAll(`.trash`);
        for (let btn of listBtnTrash) {
            btn.addEventListener('click', function (event) {
                let tchatId = this.dataset.id;
                deleteTchat(tchatId)
            })
        }
        const btnSendComment = document.querySelectorAll(`.commentSend`);
        const commentUser = document.querySelectorAll('commentUserConnect').value
        for (let btn of btnSendComment) {
            btn.addEventListener('click', function (event) {
                let comment = {
                'commentId': this.dataset.id,
                'commentUser' : commentUser
            }
            let sendComment = JSON.stringify(comment)
            sendCommentUser(sendComment);
            })    
        }    

      //envoyer un commentaire par le user connecté/identifié  
      function sendCommentUser(sendComment) {
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
        })
        .catch(function(err) { //le retour en cas de non connection au serveur 
            console.log('api problem: ' + err.message);
        })
      
      }
    })
    .catch(function (err) { //le retour en cas de non connection au serveur 
        console.log('Fetch problem: ' + err.message);
})

//fonction pour supprimer le tchat par le user connecté
function deleteTchat(tchatId) {
    fetch('http://localhost:3000' + '/tchat/' + tchatId + '/delete', {
        method: "delete",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${info.token}`
        },
        mode: "cors",
    }).then(async function (response) {
        let data = await response.json();
            if (response.status == 200) {
                return data;
            } else {
                throw data.message;
            }       
    }).then(function () {
        document.querySelector(`.Tchats[data-id="${tchatId}"]`).remove();

    }).catch(function (err) { //le retour en cas de non connection au serveur 
        alert(err);
        console.log('Fetch problem: ' + err);
    })
}

