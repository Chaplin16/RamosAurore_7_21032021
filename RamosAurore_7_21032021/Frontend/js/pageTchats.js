let config = "http://localhost:3000";

let allTchatsUsers = fetch(config) 
    .then(function(response) {
        return response.json();
    }) 
    .then(function(listTchats) {
        for (let message of listMessages) {
            let tchat = new Tchats(message);
        }
    })