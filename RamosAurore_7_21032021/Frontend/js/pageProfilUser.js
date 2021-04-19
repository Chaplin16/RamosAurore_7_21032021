const hello = document.getElementById('Hello');
const helloAvatar = document.getElementById('helloAvatar');
const btnAvatar = document.getElementById('avatar');
const btnUpdateProfil = document.getElementById('updateProfil');
const btnDeleteProfil = document.getElementById('deleteAccount');
const inputDisconnect = document.getElementById('inputDisconnect');

hello.innerHTML =`<span> Bonjour ${username}</span>`;
helloAvatar.innerHTML =`<p>
                            <img class="avatarSize" src="${avatar}"/>
                        </p>`;

//modifier l avatar 
btnAvatar.addEventListener('change', function(event) {
    
    let id = info.id;
    let token = info.token;
    const file = document.getElementById('avatar').files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    event.preventDefault();

    fetch('http://localhost:3000' + '/' + id + '/avatar/update', {
        method: "put",
        headers: { 
            "Authorization": `Bearer ${token}`
        },
        body: formData
      }).then(function(response) {
        return response.json();
      })
        .then( function(data) {         
            const info = JSON.parse(sessionStorage.getItem("user"));
            let avatarNew = data
            info.avatar = avatarNew
            sessionStorage.setItem("user", JSON.stringify(info));
            window.location.reload();
        }) 
        .catch(function(error) {
            console.log(error);
            window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l administrateur du site');
        })
});

//delete un user
btnDeleteProfil.addEventListener('click', function (event) {
    let id = info.id;
    let token = info.token;
    event.preventDefault();
    if(confirm("Attention, vous êtes sur le point de supprimer votre profil!")){
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
                delete info;
                sessionStorage.clear(info);
                window.location.reload();
                window.location = "index.html";
                return true
            })
    }
    return false
});

//se deconnecter de l application
inputDisconnect.addEventListener('click', function(event) {
    event.preventDefault();
    info.id;
    info.token;
    sessionStorage.clear(info);
    window.location = "index.html";
})