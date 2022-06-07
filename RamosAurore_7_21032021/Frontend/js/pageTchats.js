
const info = JSON.parse(sessionStorage.getItem("user"));
const tchat = JSON.parse(sessionStorage.getItem("tchat"));
//variables pour avatar et nom du user connecté dans tchat
const avatarConnect = document.getElementById('avatarConnect');
const usernameConnect = document.getElementById('usernameConnect');

//avatar, nom et tchat des autres utilisateurs
const allTchatsMembers = document.getElementById('allTchatsMembers');
const commentUserMade = document.querySelectorAll('commentUserMade');

// profil de l utilisateur connecté
const deleteAccount = document.getElementById('deleteAccount');
    if(info != null) {
    avatarConnect.innerHTML = ` <img  class="avatarSize" src="${info.avatar}" alt="avatar de l'utilisateur connecté"/> `
    }

const tchatMember = document.getElementById('tchatMember');
const btnSubmitTchat = document.getElementById('btnSubmitTchat');

const selectImg = document.getElementById('selectImg');
const linkImg = document.getElementById('linkImg');
const imgUser =  document.getElementsByClassName('imgUser');

//afficher le nom du fichier image que l utilisateur a choisit dans tchat principal
selectImg.addEventListener('change', function(event) {
    info.id;
    info.token;
    const file = document.getElementById('selectImg');
    linkImg.innerHTML = `
                <span>fichier joint: ${file.value}</span>
                <img class="deleteImg" src="images/deleteImg.png"/>`
//delete le fichier image dans le tchat principal
    const deleteImg = document.querySelector('.deleteImg');
        deleteImg.addEventListener("click", function (event) {
        linkImg.remove();  
        file.value="";
        location.reload();
    })
})

//valider le tchat du user connecté
btnSubmitTchat.addEventListener("click", function (event) {
    const file = document.getElementById('selectImg').files[0];
    event.preventDefault();

    const formData = new FormData();   
    const regexContent = /[^><]{2,250}$/;
        if(!regexContent.test(document.getElementById('inputTchatUserConnect').value)){
            alert( "votre discussion doit contenir entre 2 et 250 caractères sans chevron")
            return false
        }
    formData.append('content', document.getElementById('inputTchatUserConnect').value)
    formData.append('attachment', file)
    formData.append('userId', info.id)
    
    event.preventDefault();

    fetch('http://localhost:3000' + '/tchat/', {
        method: "post",
        headers: { 
            "Authorization": `Bearer ${info.token}` 
        },
        mode: "cors",
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
            console.log("affichage du tchat avec ou sans image")
            let toDelete = document.getElementById('inputTchatUserConnect').value;
            delete toDelete;
            location.reload();
           
    }).catch(function (err) { //le retour en cas de non connection au serveur 
            console.log('api problem: ' + err.message);
        })
})

//faire apparaitre tous les tchats et tous les commentaires au chargement de la page
function displayAllTchat(){
    fetch('http://localhost:3000' + '/tchat/getAll', {
        method: "get",
        headers: { 
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${info.token}`
        },
        mode: "cors"
    }).then(function (response) {
        if(response.status == 401){
            window.location.assign('index.html');
        }else{
            return response.json();
        }
    }).then(function (listTchats) {
        //afficher tous les tchats
            allTchatsMembers.innerHTML ="";
            for (let message of listTchats) {
                let tchat = new Tchats(message);           
                allTchatsMembers.innerHTML += tchat.displayTchats(info);
            }
            
            getAllComments(); //faire apparaitre les commentaires
            getAllUsers(); //faire apparaitre liste des users connectés
        
        //supprimer un tchat par le user-createur 
            const listBtnTrash = document.querySelectorAll(`.trash`);
            for (let btn of listBtnTrash) {
                btn.addEventListener('click', function (event) {
                    let tchatId = this.dataset.id;
                    deleteTchat(tchatId);    
                })
            }

        //envoyer un commentaire sur le tchat commenté
            const btnSendComment = document.querySelectorAll(`.commentSend`);
            for (let btn of btnSendComment) {
                btn.addEventListener('click', function (event) {
                    const regexComment = /[^<>]{2,250}$/;
                    if(!regexComment.test(document.querySelector(`.commentUserConnect[data-id="${this.dataset.postid}"]`).value)){
                        alert( "votre commentaire doit contenir enrte 2 et 250 caractères sans chevron")
                        return false
                    }
                    let commentAll = {
                    'UserId': this.dataset.id,
                    'TchatId': this.dataset.postid,
                    'comment' : document.querySelector(`.commentUserConnect[data-id="${this.dataset.postid}"]`).value,
                }

                let sendComment = JSON.stringify(commentAll)
                sendCommentUser(sendComment);
                this.closest('.commentUser').querySelector(`.commentUserConnect`).value="";
                
                })    
            }          
    }).catch(function (err) { //le retour en cas de non connection au serveur 
            console.log('Fetch problem: ' + err.message);
    })
}

//fonstion pour envoyer un commentaire :
function sendCommentUser(sendComment) {
    fetch('http://localhost:3000' + '/comment/', {
        method: "post",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${info.token}`
    },mode:"cors",
        body: sendComment           
    })  .then(function(response) {
        return response.json();
    }) 
    .then(function(data){
        getOneComment(data);
       
    })    
    .catch(function(err) { 
        console.log('api problem: ' + err.message);
    })
          
}

//fonction pour valider et afficher un commentaire :
function getOneComment(data) {
    let id = data.message.id;
    info.token;
    fetch('http://localhost:3000' + '/comment' + '/getOne' + '/'+ id, {
        method: "get",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${info.token}`
    },mode:"cors",
    }).then(function (response) {
    return response.json();
    }).then(function(data){
        let TchatId = data.TchatId;
        let comment = new Comments(data)
        let tchatParent = document.querySelector(`.oneTchat[data-id="${TchatId}"]`);
        let placeComment = tchatParent.querySelector(`.commentUserMade`);
        tchatParent = placeComment.innerHTML += comment.displayComment(info);
        location.reload();
    }).catch(function (err) { //le retour en cas de non connection au serveur 
        console.log('Fetch problem: ' + err);
    })
}

//fonction pour voir tous les commentaires
function getAllComments(){
    fetch('http://localhost:3000' + '/comment' + '/getAllComments', {
    method: "get",
    headers: { 
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": `Bearer ${info.token}`
    },
    mode: "cors"
    }).then(function (response) {
        return response.json();
    }).then(function(listData){
        for (let data of listData) {
            let comment = new Comments(data)
            let tchatParent = document.querySelector(`.oneTchat[data-id="${comment.TchatId}"]`);
            let placeComment = tchatParent.querySelector(`.commentUserMade`);
            tchatParent = placeComment.innerHTML += comment.displayComment(info);
            
        }
        bindDeleteComment();
     
    })
      
}

//fonction pour afficher la liste tous les utilisateurs
let member = document.querySelector('.member');
function getAllUsers(){
    fetch('http://localhost:3000' + '/' + 'getAllUsers', {
    method: "get",
    headers: { 
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": `Bearer ${info.token}`
    },
    mode: "cors"
    }).then(function (response) {
        return response.json();
    }).then(function(listData){
        member.innerHTML = "";
        for (let data of listData) {
            let username = data.username;
            let avatar = data.avatar;
            let id = data.id;
            let isAdmin = data.isAdmin;
            
            member.innerHTML += `<div class="memberUsersConnected" data-id="${id}"> 
                                    <img  class="avatarSize" src="${avatar}" alt="avatar d'un membre'"/>
                                    <p class="pseudo">${username}</p>

                                    <img role="button" class="trashUser" data-id="${id}" data-username ="${username}" data-enable="${info.isAdmin}" name="submit" src="images/trash.png" alt="supprimer le commentaire"  /> 

                                 </div>`
        }
        member.innerHTML += `<div class="memberUsersConnected"> 
        <img  class="avatarSize" src="images/deleteImg.png" alt="avatar d'un membre'"/>
        <p class="pseudo">retirer le filtre</p>
    </div>
    `


        // afficher les tchats d'un seul utilisateur
        const getTchat = document.querySelectorAll(`.memberUsersConnected`);
        for (let btn of getTchat) {
            btn.addEventListener('click', function(event) {       
                for(let btn of getTchat){
                    btn.className = "memberUsersConnected";
                }
                if(this.dataset.id != null){
                    this.className += " active";
                    let UserId = this.dataset.id;
                    getOneTchat(UserId); 
                }else{
                    displayAllTchat();
                }
            })
        }

        // supprimer un user par un administrateur 
        const trashUser = document.querySelectorAll(`.trashUser`);
        for (let btn of trashUser) {
            btn.addEventListener('click', function(event) { 
                let id = this.dataset.id;
                let username = this.dataset.username
                let token = info.token;
                event.preventDefault();
                if(confirm("Attention, vous êtes sur le point de supprimer " + username)) {
                    fetch('http://localhost:3000' + '/' + id + '/delete', {
                        method: "delete",
                        headers: { 
                            "Content-Type": "application/json;charset=UTF-8",
                            "Authorization": `Bearer ${token}`
                        },
                        mode: "cors",
                    }).then(function(response) {
                            return response.json();
                    }).then(function(){                       
                            window.location.reload();
                            return true
                        })
                }
                return false
            });
            
        }

    }).catch(function (err) { //le retour en cas de non connection au serveur 
        console.log('Fetch problem: ' + err);
    })
}

//fonction pour supprimer le tchat par son createur
 function deleteTchat(tchatId) {
    fetch('http://localhost:3000' + '/tchat/' + tchatId + '/delete', {
        method: "delete",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${info.token}`
        },
        mode: "cors",
    }).then(async function(response) {
        let data = await response.json();
            if (response.status == 200) {
                return data;
            } else {
                throw data.message;
            }       
    }).then(function () {
        document.querySelector(`.oneTchat[data-id="${tchatId}"]`).remove();
    }).catch(function (err) { //le retour en cas de non connection au serveur 
        console.log('Fetch problem: ' + err);
    })
}

//fonction pour supprimer un commentaire par son createur
function deleteComment(id) {
    fetch('http://localhost:3000' + '/comment/' + id + '/delete', {
        method: "delete",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${info.token}`
        },
        mode: "cors",
    }).then(function (response) {
        return response.json();
    }).then(function () {
     document.querySelector(`.commentUser[data-id="${id}"]`).remove();
 
    }).catch(function (err) { 
        console.log('Fetch problem: ' + err);
    })  
}

//function pour supprimer un commentaire  
function bindDeleteComment(){
        const btnTrashComment = document.querySelectorAll(`.trashComment`);
        for (let btn of btnTrashComment) {
            btn.addEventListener('click', function (event) {
                let id = this.dataset.id;
                deleteComment(id);   
            })
        }
}



//function pour afficher un tchat 
function getOneTchat(UserId) {
    info.token;
    fetch('http://localhost:3000' + '/tchat' + '/getTchats' + '/'+ UserId, {
        method: "get",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${info.token}`
    },mode:"cors",
    }).then(function (response) {
    return response.json();
    }).then(function(listData){
        allTchatsMembers.innerHTML ="";
        for (let message of listData) {
            let tchat = new Tchats(message);           
            allTchatsMembers.innerHTML += tchat.displayTchats(info);
        }

    }).catch(function (err) { //le retour en cas de non connection au serveur 

        console.log('Fetch problem: ' + err);
    })
}
        
displayAllTchat();
