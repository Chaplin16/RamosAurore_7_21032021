const info = JSON.parse(sessionStorage.getItem("user"));
//avatar et nom du user connecté
const avatarConnect = document.getElementById('avatarConnect');
const usernameConnect = document.getElementById('usernameConnect');

//avatar, nom et tchat des autres utilisateurs
const allTchatsMembers = document.getElementById('allTchatsMembers');
const commentsUsers = document.getElementById('commentsUsers')

// profil de l utilisateur connecté
const deleteAccount = document.getElementById('deleteAccount')


let avatar =  info.avatar;    
let username = info.username;

avatarConnect.innerHTML = ` <img  class="avatarSize" src="${avatar}"/> `
usernameConnect.innerHTML =`<span>${username}</span>`



//valider un tchat de user connecté
const tchatMember = document.getElementById('tchatMember');
const btnSubmitTchat = document.getElementById('btnSubmitTchat');

btnSubmitTchat.addEventListener("click", function (event) {
    event.preventDefault();
    let message = {
        'content': document.getElementById('inputTchatUserConnect').value,
        'userId' : info.id
    }
    let sendMessage = JSON.stringify(message)

    fetch('http://localhost:3000' + '/tchat/', {
        method: "post",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        mode: "cors",
        body: sendMessage
    })  .then(function(response) {
            return response.json();
        }) 
        .then(function(data){
            window.location.reload(); 
           
        })
        .catch(function(err) { //le retour en cas de non connection au serveur 
            console.log('api problem: ' + err.message);
        })
})

//faire apparaitre tous les tchats 
fetch('http://localhost:3000' + '/tchat/getAll', {
    method: "get",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    mode: "cors"
})  .then(function(response) {
        return response.json();
    }) 
    .then(function(listTchats) {
        for (let message of listTchats) {
            let tchat = new Tchats(message);
            allTchatsMembers.innerHTML += tchat.displayTchats();
        }
    })
    .catch(function(err) { //le retour en cas de non connection au serveur 
        console.log('Fetch problem: ' + err.message);
    })

