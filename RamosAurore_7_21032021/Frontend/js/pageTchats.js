let config = "http://localhost:3000";
let myTchat = document.getElementById('myTchat');

function showMessage(tchat){
    myTchat.innerHTML += 
        //la partie pour le message du user connecté//
        `<button class="avatar_post"> 
            <a href="#">Avatar</a>
        </button>
        <label for="tchatMainUser"> </label>
            <input class="input_formulaire_post" 
                type="text" 
                name="tchatMainUser" 
                id="tchatMainUser" 
                placeholder="Quoi de neuf??"
                ${tchat.content}/>
            <a href="#" dowload="${tchat.attachment}>
                <img class="linkImage" src="images/trombone_40.png"/>
            </a>
            <input type=submit id="btnTchat" class="linkSend" data-id="${tchat.id}" data-content="${tchat.content} data-image="${tchat.attachment}"  data-name="${tchat.userId}" data-create="${tchat.createAt}" data-update="${tchat.updatedAt}">
`  
}

let allTchatsUsers = fetch(config) 
    .then(function(response) {
        return response.json();
    }) 
    .then(function(listTchats) {
        for (let message of listMessages) {
            let tchat = new Tchats(message);
            showMessage(tchat);
        }
    })
    .catch(function(err) { //le retour en cas de non connection au serveur 
        console.log('Fetch problem: ' + err.message);
    })