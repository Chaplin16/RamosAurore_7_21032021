let config = "http://localhost:3000";
let myTchat = document.getElementById('otherTchats');

function showTchats(tchat){
    myTchat.innerHTML += ``
        //la partie pour le message du user connecté//
}      


let allTchatsUsers = fetch(config) 
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