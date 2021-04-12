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

let avatar =  info.avatar;    
let username = info.username;

avatarConnect.innerHTML = ` <img  class="avatarSize" src="${avatar}"/> `
usernameConnect.innerHTML =`<span>${username}</span>`


//valider un tchat de user connecté
const tchatMember = document.getElementById('tchatMember');
const btnSubmitTchat = document.getElementById('btnSubmitTchat');

btnSubmitTchat.addEventListener("click", function(event) {
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
            let tchat = {
                tchatId: data.message.id,
                userId: data.message.UserId
            }
            sessionStorage.setItem("tchat", JSON.stringify(tchat));

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


//NE FONCTIONNE PAS 
//BTN NULL NOT FOUND!!!!
const btn = document.getElementsByClassName('trash')
//supprimer le tchat par le user connecté
// btn.addEventListener("click", function(event) {
//     event.preventDefault();

//     let token = info.token;
//     let tchatId = tchat.tchatId;
//     let id = info.id;
    
//     if (!tchatId === id ){
//         alert("vous ne pouvez pas supprimer la discussion d'un autre utilisateur")
//     }else {
//         fetch('http://localhost:3000' + '/tchat' + tchatId + '/delete', {
//             method: "delete",
//             headers: { 
//                 "Content-Type": "application/json;charset=UTF-8",
//                 "Authorization": `Bearer ${token}`
//             },
//             mode: "cors",
//         }).then(function(response) {
//                 return response.json();
//         }).then(function(){
//             delete tchat;
//             sessionStorage.clear(tchat);
//             window.location.reload();
//             return true
//         })
//     }
//     return false
    
// });