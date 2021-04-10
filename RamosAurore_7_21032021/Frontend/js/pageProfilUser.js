const hello = document.getElementById('Hello');
const helloAvatar = document.getElementById('helloAvatar');
const btnUpdateAvatar = document.getElementById('updateAvatar');
const btnUpdateProfil = document.getElementById('updateProfil');
const btnDeleteProfil = document.getElementById('deleteAccount');


hello.innerHTML =`<span> Bonjour ${username}</span>`;
helloAvatar.innerHTML =`<p>
                            <img class="avatarSize" src="${avatar}"/>
                        </p>`;

//modifier l avatar 
btnUpdateAvatar.addEventListener('click', function(event) {
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
            let avatarNew = data
          
            sessionStorage.setItem("avatar", JSON.stringify(avatarNew));  
            console.log(avatar)  
              console.log(avatarNew)
            helloAvatar.innerHTML = 
            `<p>
               <img class="avatarSize" src=${avatarNew}/>
            </p>`;     
        window.location.reload();
            //location.reload()

        }) 
        .catch(err => {
            console.log(err);
            window.alert('Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l administrateur du site');
        })
})



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
})