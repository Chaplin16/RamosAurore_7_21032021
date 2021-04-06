
//avatar et nom deu user connecté
const avatarConnect = document.getElementById('avatarConnect');
const usernameConnect = document.getElementById('usernameConnect');

//avatar, nom et tchat des autres utilisateurs
const allTchatsMembers = document.getElementById('allTchatsMembers');
const commentsUsers = document.getElementById('commentsUsers')


//recuperation de l avatar et du nom du user connecté
// fetch('http://localhost:3000' + '/' + userId, {
//     method: "get",
//     headers: { "Content-Type": "application/json;charset=UTF-8" },
//     mode: "cors"
// }) .then(function (response) {
//     return response.json()

// }).then(function(json) { 
//     let avatar =  json.avatar;
//     let username = json.username;

//     avatarConnect.innerHTML = ` <p>${avatar}</p> `
//     usernameConnect.innerHTML =`<span>${username}</span>`

// }) .catch(function(err) {
//     console.log('Retour info Api problem: ' + err.message);
// })

//creation d'un tchat du user connecté 
// fetch('http://localhost:3000' + '/chat/', {
//     method: "post",
//     headers: { "Content-Type": "application/json;charset=UTF-8" },
//     mode: "cors"
// }) .then(function (response) {
//     return response.json()

// }).then(function(json) { 
//     let content=  json.content;
//     let attachement = json.attachment;



// }) .catch(function(err) {
//     console.log('Retour info Api problem: ' + err.message);
// })





// function showComments(comment)
// {
//     commentsUsers.innerHTML +=
//         `<p>Commentaires</p>
//         <button class="avatarComment" id="avatarConnect"> 
//             <p>${avatar}</p>
//         </button>
//         <p id="usernameConnect" class="usernameConnect">${username}</p>
//         <label for="commentUser">${comment}</label>
//         <input class="commentUserConnect" type="texterea" name="commentUser" id="commentUserConnect"/>  
//         <img class="commentSend" src="images/fleche.png">`
// }      



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
            allTchatsMembers.innerHTML += tchat.display();
        }
    })
    .catch(function(err) { //le retour en cas de non connection au serveur 
        console.log('Fetch problem: ' + err.message);
    })

