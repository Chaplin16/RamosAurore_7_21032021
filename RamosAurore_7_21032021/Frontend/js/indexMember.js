let btnSubmitMember = document.getElementById("btnSubmitMember");

btnSubmitMember.addEventListener("click", function (event) { // envoie du formulaire au click du bouton
    let formLogin = document.getElementById("formLogin");
    event.preventDefault();

    if( formLogin.reportValidity() == true) {//verification si le formulaire est correctement rempli
        let contact = { // je cree un objet avec les valeurs que je recupere par les id
            'email': document.getElementById("emailRecognized").value,
            'password': document.getElementById("passwordRecognized").value,
        }     
        let sendInfo = JSON.stringify(contact)
        //j'envoie des données au serveur    
        fetch('http://localhost:3000' + '/login', {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            mode:"cors",
            body: sendInfo            
        })  
        .then(function(response) { //j enregistre le retour  de l'api dans des variables
            fetch('http://localhost:3000' + '/:email/userId', {
                method: "get",
                headers: {"Content-Type": "application/json;charset=UTF-8"},
                mode:"cors",
                body: contact.email            
            }).then(function() {
                let userId = user.id;
                console.log(userId)
                console.log("toto")
            })

//ouverture de la page de confirmation ave les parametres dans l url
               window.location.assign("pageTchats.html?id=" + userId)
        })
        //le retour en cas de non connection au serveur 
        .catch(function(err) {
        console.log('Retour info Api problem: ' + err.message);
        })
    };
});
