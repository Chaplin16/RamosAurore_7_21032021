const urlParams = new URL(document.location).searchParams; //recuperation du parametre (id) à la fin de l url
const userId = urlParams.get('id');

const avatarConnect = document.getElementById('avatarConnect');
const usernameConnect = document.getElementById('usernameConnect');

const user = fetch('http://localhost:3000' + '/' + userId, {
    method: "get",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    mode: "cors"
}) .then(function (response) {
    return response.json()

    }).then(function(json) { 
        let avatar =  json.avatar;
        let username = json.username;

        avatarConnect.innerHTML = ` <p>${avatar}</p> `
        usernameConnect.innerHTML =`<span>${username}</span>`


    }) .catch(function(err) {
    console.log('Retour info Api problem: ' + err.message);
    })