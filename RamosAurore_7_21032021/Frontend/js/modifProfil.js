const info = JSON.parse(sessionStorage.getItem("user"));

const modifUsername = document.getElementById('modifUsername');
const modifEmail = document.getElementById('modifEmail'); 
const modifPassword = document.getElementById('modifPassword');
const modifJob = document.getElementById('modifJob');

//je recupere info du sessionStorage
let id = info.id;
let username = info.username;
let email = info.email;
let job = info.job;

modifUsername.innerHTML = `${username}`
modifEmail.innerHTML = `value="${email}"`
modifJob.innerHTML = `value="${job}"`

fetch('http://localhost:3000' + '/getOne/' + id, {
    method: "get",
    headers: {"Content-Type": "application/json;charset=UTF-8"},
    mode:"cors",
}).then(function(response) {
    return response.json();
}).then(function(data){

    let password = data.password;


}).catch(function(err) { 
        console.log('api problem: ' + err.message);
})
