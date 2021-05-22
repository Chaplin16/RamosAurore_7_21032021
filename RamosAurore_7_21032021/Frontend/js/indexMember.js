let btnSubmitMember = document.getElementById("btnSubmitMember");

//connection par user deja membre
btnSubmitMember.addEventListener("click", function (event) { 
    let formLogin = document.getElementById("formLogin");
    event.preventDefault();

    if (formLogin.reportValidity() == true) {//verification si le formulaire est correctement rempli
        let contact = { // je cree un objet avec les valeurs que je recupere par les id
            'email': document.getElementById("emailRecognized").value,
            'password': document.getElementById("passwordRecognized").value,
        }
        let sendInfo = JSON.stringify(contact);
        let email = JSON.stringify(contact.email);
        //j'envoie des données au serveur    
        fetch('http://localhost:3000' + '/login', {
            method: "post",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            mode: "cors",
            body: sendInfo
        }).then(function (response) {
            return response.json()
        })  
            .then(function (json) {
                let user = new User(json.user);
                user.save(json.token);
            
            window.location.assign("pageTchats.html")
            }).catch(function (err) {
                console.log('Il n y a personne d identifier avec ce mail' + err.message);
            })
            //le retour en cas de non connection au serveur 
            .catch(function (err) {
                console.log('Retour info Api problem: ' + err.message);
            })
    };
});
