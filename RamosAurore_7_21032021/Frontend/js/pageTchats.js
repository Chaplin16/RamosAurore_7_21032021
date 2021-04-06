let config = "http://localhost:3000";
let tchatsMembersAndComments = document.getElementById('tchatsMembersAndComments');

function showTchats(tchat){
    tchatsMembersAndComments.innerHTML += 
    `<div class="allTchats"
        <div class="tchatMember">
            <button class="avatarMember"> 
                <p>${avatarMember}</p>
            </button>
            <p id=usernameMember class="usernameMember">${usernameMember}</p>
            <label for="allTchatMember">${content}</label>
            <input class="inputTchatMember" type="texterea" name="allTchatMember" id="tchatMember"/>  
        </div>
        <div class="commentUser">
            <p>Commentaires</p>
            <button class="avatarComment" id="avatarConnect"> 
                <p>${avatar}</p>
            </button>
            <p id=usernameConnect class="usernameConnect">${username}</p>
            <input class="commentUserConnect" type="texterea" name="commentUser" id="commentUserConnect"/>  
            <img class="commentSend" src="images/fleche.png">
        </div>
    </div`
}      

fetch('http://localhost:3000' + '/' + chat + '/:id')
    .then(function(response) {
        return response.json();
    }) 
    .then(function(listTchats) {
        for (let message of listMessages) {
            let tchat = new Tchats(message);
            showTchats(tchat);
        }
    })
    .catch(function(err) { //le retour en cas de non connection au serveur 
        console.log('Fetch problem: ' + err.message);
    })