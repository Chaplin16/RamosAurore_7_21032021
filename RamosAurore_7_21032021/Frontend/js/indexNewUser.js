let btnSubmitNewUser = document.getElementById("btnSubmitNewUser");

btnSubmitNewUser.addEventListener("click", function (event) { // envoie du formulaire au click du bouton
    let form = document.getElementById("form");
    event.preventDefault();

    if( form.reportValidity() == true) {//verification si le formulaire est correctement rempli
        let contact = { // je cree un objet avec les valeurs que je recupere par les id
            'username': document.getElementById("username").value,
            'email': document.getElementById("email").value,
            'password': document.getElementById("password").value,
            'job': document.getElementById("job").value,
            'avatar': document.getElementById("avatar").value,  
        }     
        let sendInfo = JSON.stringify({ 
            contact, 
        })
        //j'envoie des données au serveur    
        fetch('http://localhost:3000/signup'), {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            mode:"cors",
            body: sendInfo            
        }  
        .then(function(data) { //j enregistre le retour  de l'api dans des variables
            let usernameConnect = data.contact.username;
            let avatarConnect = data.contact.avatar;

//ouverture de la page de confirmation ave les parametres dans l url
               window.location.assign("pageTchats.html"+ avatarConnect + "&user=" + usernameConnect )
        })
        //le retour en cas de non connection au serveur 
        .catch(function(err) {
        console.log('Retour info Api problem: ' + err.message);
        })
}

});