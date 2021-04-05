let config = "http://localhost:3000";
let tchatsMembersAndComments = document.getElementById('tchatsMembersAndComments');

function showTchats(tchat){
    tchatsMembersAndComments.innerHTML += 
    `<div class="allTchats"
        <div class="tchatMember">
            <button class="avatarMember"> 
                <a href="#">Avatar</a>
            </button>
            <label for="allTchatMember"> </label>
            <input class="inputTchatMember" type="texterea" name="allTchatMember" id="tchatMember"/>  
        </div>
        <div class="commentUser">
            <p>X Commentaires</p>
            <button class="avatarComment"> 
                <a href="#">Avatar</a>
            </button>
            <input class="commentUserConnect" type="texterea" name="commentUser" id="commentUserConnect"/>  
            <img class="commentSend" src="images/fleche.png">
        </div>
    </div`
}      

// fetch(config + '/' + chat + '/' + allTchats)
//     .then(function(response) {
//         return response.json();
//     }) 
//     .then(function(listTchats) {
//         for (let message of listMessages) {
//             let tchat = new Tchats(message);
//             showTchats(tchat);
//         }
//     })
//     .catch(function(err) { //le retour en cas de non connection au serveur 
//         console.log('Fetch problem: ' + err.message);
//     })