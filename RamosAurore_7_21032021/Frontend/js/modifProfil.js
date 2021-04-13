const info = JSON.parse(sessionStorage.getItem("user"));

const modifUsername = document.getElementById('modifUsername');
const modifEmail = document.getElementById('modifEmail'); 
const modifPassword = document.getElementById('modifPassword');
const modifJob = document.getElementById('modifJob');
const btnSubmitModif = document.getElementById('btnSubmitModif');

//je recupere info du sessionStorage
let id = info.id;
let username = info.username;
let email = info.email;
let job = info.job;
let token = info.token;

modifUsername.value = `${username}`   
modifEmail.value =`${email}`
modifJob.value = `${job}`

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
});

btnSubmitModif.addEventListener('click', function(event) {
    let formModifUser = document.getElementById('formModifUser');
    event.preventDefault();
    
    if( formModifUser.reportValidity() == true) {
        let newProfil = { // je cree un objet avec les valeurs que je recupere par les id
            'username': modifUsername.value,
            'email': modifEmail.value,
            'password': modifPassword.value,
            'job': modifJob.value
        }
        let newProfilUser = JSON.stringify( newProfil );

        fetch('http://localhost:3000' + '/' + id + '/profil/update', {
            method: "put",
            headers: { 
                "Content-Type": "application/json;charset=UTF-8",
                "Authorization": `Bearer ${token}`
            },
            mode:"cors",
            body: newProfilUser           
        })
        .then(function (response) {
            return response.json()
        }) 
        .then(function(data) { 
            const info = JSON.parse(sessionStorage.getItem("user"));
            let usernameNew = data.message.username;
            let emailNew = data.message.email;
            let jobNew = data.message.job;
            info.username = usernameNew
            info.email = emailNew
            info.job = jobNew
            sessionStorage.setItem("user", JSON.stringify(info));
            alert('votre profil a bien été modifié!')
        })
        .catch(function(err) {
            console.log('Retour info Api problem: ' + err.message);
        })
    }
})
